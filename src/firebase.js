import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "zctourapp.firebaseapp.com",
  projectId: "zctourapp",
  storageBucket: "zctourapp.appspot.com",
  messagingSenderId: "270526120613",
  appId: "1:270526120613:web:9ef0f6831e3a162ab8434c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
