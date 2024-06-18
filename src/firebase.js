/** @format */

// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9-HRaYXpvDl_76QXR-GfScRycrHc5xE8",
  authDomain: "contri-pals.firebaseapp.com",
  projectId: "contri-pals",
  storageBucket: "contri-pals.appspot.com",
  messagingSenderId: "952197997714",
  appId: "1:952197997714:web:476d24ef471e9ef725324b",
  measurementId: "G-VWJHYWQRQ4",
};
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
// export default firebaseApp; // Export the Firebase app if needed elsewhere

// src/firebase.js
