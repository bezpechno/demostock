// lib/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { Portfolio } from '../types/types';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const getPortfolio = async (id: string): Promise<Portfolio | null> => {
  const docRef = doc(db, 'portfolios', id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? (docSnap.data() as Portfolio) : null;
};

export const updatePortfolio = async (portfolio: Portfolio): Promise<void> => {
  const docRef = doc(db, 'portfolios', portfolio.id);
  await setDoc(docRef, portfolio);
};

export const createPortfolio = async (portfolio: Portfolio): Promise<void> => {
  const docRef = doc(db, 'portfolios', portfolio.id);
  await setDoc(docRef, portfolio);
};

export { auth, GoogleAuthProvider, signInWithPopup, signOut };