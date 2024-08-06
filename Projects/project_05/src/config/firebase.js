// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfT3OGYfY40-eWVoxSDsVxgux7WnKLHP0",
  authDomain: "vite-contact-97947.firebaseapp.com",
  projectId: "vite-contact-97947",
  storageBucket: "vite-contact-97947.appspot.com",
  messagingSenderId: "1007129569094",
  appId: "1:1007129569094:web:38a6b99f21f6d9159ea747"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);