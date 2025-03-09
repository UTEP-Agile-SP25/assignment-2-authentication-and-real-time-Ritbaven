// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDp7ELkZcg88wMY0GODT9GLlhwjI4uhBxk",
    authDomain: "ibaven-sandbox.firebaseapp.com",
    projectId: "ibaven-sandbox",
    storageBucket: "ibaven-sandbox.firebasestorage.app",
    messagingSenderId: "111964087951",
    appId: "1:111964087951:web:9f19aa0c5d85c7691572fa"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;