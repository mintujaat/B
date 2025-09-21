// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7pGe0YS6HrscAjwjJefgr9tAKO__UZkU",
  authDomain: "blog-2f57c.firebaseapp.com",
  projectId: "blog-2f57c",
  storageBucket: "blog-2f57c.appspot.com",
  messagingSenderId: "608339540577",
  appId: "1:608339540577:web:cd5323ea45e3a4b4dc4820",
  measurementId: "G-JEPHSB73V3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };
