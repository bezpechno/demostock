import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

test('Firebase config initializes without errors', () => {
  const firebaseConfig = {
    apiKey: 'test-api-key',
    authDomain: 'test-auth-domain',
    projectId: 'test-project-id',
    storageBucket: 'test-storage-bucket',
    messagingSenderId: 'test-messaging-sender-id',
    appId: 'test-app-id'
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  expect(auth).toBeTruthy();
});
