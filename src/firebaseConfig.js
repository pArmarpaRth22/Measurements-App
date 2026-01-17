import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBW3E7wtyQDk0d4caYBr6CDB88E1UGQxuY",
  authDomain: "tailor-measurement-app-e4b84.firebaseapp.com",
  projectId: "tailor-measurement-app-e4b84",
  storageBucket: "tailor-measurement-app-e4b84.firebasestorage.app",
  messagingSenderId: "577479263332",
  appId: "1:577479263332:web:d1d181abca712dd93dcb71",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
