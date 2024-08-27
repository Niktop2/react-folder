// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZIEj3H7ygsxA6HlZcpMn12aYmTplO3W8",
  authDomain: "vite-contacts-15f11.firebaseapp.com",
  projectId: "vite-contacts-15f11",
  storageBucket: "vite-contacts-15f11.appspot.com",
  messagingSenderId: "378422345023",
  appId: "1:378422345023:web:2d286f41b8a1dd14ed678a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);