import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdeuZfQjuwDkpxKrIL7ddEpo-_QJCDHAI",
  authDomain: "aryacode-61096.firebaseapp.com",
  projectId: "aryacode-61096",
  storageBucket: "aryacode-61096.appspot.com",
  messagingSenderId: "474764157916",
  appId: "1:474764157916:web:95d1d39577156c571da519"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
