// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3c0c5.firebaseapp.com",
  projectId: "mern-estate-3c0c5",
  storageBucket: "mern-estate-3c0c5.appspot.com",
  messagingSenderId: "945222982025",
  appId: "1:945222982025:web:60a2d4600f4f8ec6646958"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);