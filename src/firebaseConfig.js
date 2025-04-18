// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDPforEWSpvD215-WPZ_KqHaZ5fUBkea5k",
  authDomain: "neuclix-onboarding.firebaseapp.com",
  projectId: "neuclix-onboarding",
  storageBucket: "neuclix-onboarding.firebasestorage.app",
  messagingSenderId: "481653629237",
  appId: "1:481653629237:web:6457671f88608b75456c7c"
};

let db = null; // Initialize db outside

const initializeFirebase = () => {
  try{
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    console.log("Firebase app initialized correctly");
  }catch(e){
    console.log("Error initializing Firebase:", e);
  }
};
export { db, initializeFirebase };