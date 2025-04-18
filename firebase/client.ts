// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDGWZKRUsAogN4f5O1hJ8HXWZ_blm2pbEQ",
  authDomain: "interview-project-e7b61.firebaseapp.com",
  projectId: "interview-project-e7b61",
  storageBucket: "interview-project-e7b61.firebasestorage.app",
  messagingSenderId: "700559706968",
  appId: "1:700559706968:web:bcb53654969b3f2df3332d",
  measurementId: "G-MSX40RVFZY"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);