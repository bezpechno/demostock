// lib/firebase.ts
import { initializeApp, getApps } from 'firebase/app';
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc,
  collection, 
  getDocs,
  query,
  where,
  Timestamp,
  deleteDoc,
  writeBatch,
  runTransaction,
  collectionGroup,
} from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup, User as FirebaseUser } from 'firebase/auth';
import { Portfolio, User, Asset } from '../types/types';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);

const aggregateAssets = (assets: Asset[]): Asset[] => {
  const aggregatedMap = new Map<string, Asset>();
  
  assets.forEach(asset => {
    if (aggregatedMap.has(asset.symbol)) {
      const existingAsset = aggregatedMap.get(asset.symbol)!;
      existingAsset.amount += asset.amount;
      if (asset.dateAdded > existingAsset.dateAdded) {
        existingAsset.dateAdded = asset.dateAdded;
        existingAsset.currentPrice = asset.currentPrice;
        existingAsset.initialPrice = asset.initialPrice;
      }
    } else {
      aggregatedMap.set(asset.symbol, { ...asset });
    }
  });

  return Array.from(aggregatedMap.values());
};

const convertDatesToTimestamps = (obj: any): any => {
  const newObj: any = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value instanceof Date) {
      newObj[key] = Timestamp.fromDate(value);
    } else if (typeof value === 'object' && value !== null) {
      newObj[key] = convertDatesToTimestamps(value);
    } else {
      newObj[key] = value;
    }
  }
  return newObj;
};

const convertTimestampsToDates = (obj: any): any => {
  const newObj: any = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value instanceof Timestamp) {
      newObj[key] = value.toDate();
    } else if (typeof value === 'object' && value !== null) {
      newObj[key] = convertTimestampsToDates(value);
    } else {
      newObj[key] = value;
    }
  }
  return newObj;
};

export const createOrGetUser = async (firebaseUser: FirebaseUser): Promise<User> => {
  const userRef = doc(db, 'users', firebaseUser.uid);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    return userSnap.data() as User;
  } else {
    const newUser: User = {
      id: firebaseUser.uid,
      email: firebaseUser.email || '',
      displayName: firebaseUser.displayName || '',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    await setDoc(userRef, convertDatesToTimestamps(newUser));
    return newUser;
  }
};

export const getUser = async (userId: string): Promise<User | null> => {
  const userRef = doc(db, 'users', userId);
  const userSnap = await getDoc(userRef);
  return userSnap.exists() ? userSnap.data() as User : null;
};

export const updateUser = async (userId: string, updates: Partial<User>): Promise<void> => {
  const userRef = doc(db, 'users', userId);
  await updateDoc(userRef, convertDatesToTimestamps({
    ...updates,
    updatedAt: new Date(),
  }));
};

export const getPortfolio = async (id: string): Promise<Portfolio | null> => {
  const docRef = doc(db, 'portfolios', id);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) return null;
  
  const portfolioData = docSnap.data();
  const assetsSnap = await getDocs(collection(docRef, 'assets'));
  const assets = assetsSnap.docs.map(doc => {
    const data = doc.data();
    return {
      symbol: data.symbol,
      amount: data.amount,
      initialPrice: data.initialPrice,
      currentPrice: data.currentPrice || data.initialPrice || 0,
      dateAdded: data.dateAdded?.toDate ? data.dateAdded.toDate() : new Date(),
      id: doc.id
    } as Asset;
  });
  
  return { 
    id: docSnap.id, 
    ...convertTimestampsToDates(portfolioData), 
    assets,
  } as Portfolio;
};

export const getPortfolios = async (userId: string): Promise<Portfolio[]> => {
  const portfoliosQuery = query(collection(db, 'portfolios'), where('creator', '==', userId));
  const portfolioSnapshot = await getDocs(portfoliosQuery);
  
  const assetsQuery = query(collectionGroup(db, 'assets'));
  const assetsSnapshot = await getDocs(assetsQuery);

  const assetsByPortfolio = assetsSnapshot.docs.reduce((acc, doc) => {
    const portfolioId = doc.ref.parent.parent!.id;
    if (!acc[portfolioId]) {
      acc[portfolioId] = [];
    }
    acc[portfolioId].push({
      symbol: doc.data().symbol,
      amount: doc.data().amount,
      initialPrice: doc.data().initialPrice,
      currentPrice: doc.data().currentPrice || doc.data().initialPrice || 0,
      dateAdded: doc.data().dateAdded?.toDate ? doc.data().dateAdded.toDate() : new Date(),
      id: doc.id
    } as Asset);
    return acc;
  }, {} as Record<string, Asset[]>);

  const portfolios = portfolioSnapshot.docs.map((doc) => {
    const portfolioData = doc.data();
    const assets = assetsByPortfolio[doc.id] || [];

    // Aggregate assets
    const aggregatedAssets = aggregateAssets(assets);

    return { 
      id: doc.id, 
      ...convertTimestampsToDates(portfolioData), 
      assets: aggregatedAssets,
    } as Portfolio;
  });
  
  return portfolios;
};

export const createPortfolio = async (portfolio: Omit<Portfolio, 'id'>): Promise<string> => {
  const user = auth.currentUser;
  if (!user) {
    throw new Error('User must be authenticated to create a portfolio');
  }

  const { assets, ...portfolioData } = portfolio;
  const aggregatedAssets = aggregateAssets(assets);

  const portfolioRef = doc(collection(db, 'portfolios'));

  try {
    await runTransaction(db, async (transaction) => {
      const portfolioToSave = convertDatesToTimestamps({
        ...portfolioData,
        creator: user.uid,
        creatorName: user.displayName || user.email || 'Anonymous',
        createdAt: new Date(),
        updatedAt: new Date(),
        initialValue: portfolioData.initialValue || 0,
        value: portfolioData.value || 0,
        gain: portfolioData.gain || 0,
      });

      transaction.set(portfolioRef, portfolioToSave);

      aggregatedAssets.forEach(asset => {
        const assetRef = doc(collection(portfolioRef, 'assets'));
        const assetData = convertDatesToTimestamps({
          symbol: asset.symbol,
          amount: asset.amount,
          initialPrice: asset.initialPrice || 0,
          currentPrice: asset.currentPrice || 0,
          dateAdded: asset.dateAdded,
        });
        transaction.set(assetRef, assetData);
      });
    });

    return portfolioRef.id;
  } catch (error) {
    console.error('Error creating portfolio:', error);
    throw error;
  }
};

export const updatePortfolio = async (id: string, updates: Partial<Portfolio>): Promise<void> => {
  const portfolioRef = doc(db, 'portfolios', id);
  const { assets, ...portfolioUpdates } = updates;
  
  try {
    await runTransaction(db, async (transaction) => {
      transaction.update(portfolioRef, convertDatesToTimestamps({
        ...portfolioUpdates,
        updatedAt: new Date(),
      }));
      
      if (assets) {
        const assetsCollection = collection(portfolioRef, 'assets');
        const aggregatedAssets = aggregateAssets(assets);

        // Удаление существующих активов
        const existingAssets = await getDocs(assetsCollection);
        existingAssets.docs.forEach(doc => {
          transaction.delete(doc.ref);
        });

        // Добавление новых агрегированных активов
        aggregatedAssets.forEach(asset => {
          const assetRef = doc(assetsCollection);
          transaction.set(assetRef, convertDatesToTimestamps(asset));
        });
      }
    });
  } catch (error) {
    console.error('Error updating portfolio:', error);
    throw error;
  }
};

export const signInWithGoogle = async (): Promise<User | null> => {
  try {
    const result = await signInWithPopup(auth, new GoogleAuthProvider());
    const firebaseUser = result.user;
    const user = await createOrGetUser(firebaseUser);
    return user;
  } catch (error) {
    console.error("Error signing in with Google", error);
    return null;
  }
};

export const getCurrentUser = (): FirebaseUser | null => {
  return auth.currentUser;
};