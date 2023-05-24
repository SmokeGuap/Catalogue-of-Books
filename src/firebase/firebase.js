import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDCr_vt-vOckgTWUHXzbrz5Io-JbN6FNgw',
  authDomain: 'catalogue-of-books.firebaseapp.com',
  projectId: 'catalogue-of-books',
  storageBucket: 'catalogue-of-books.appspot.com',
  messagingSenderId: '934243796678',
  appId: '1:934243796678:web:374a6fd109612a087e39c7',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
