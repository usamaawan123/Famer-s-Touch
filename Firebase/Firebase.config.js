// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqxkjrjtg1VMOPVWdDoBtPvkQNq40GTac",
  authDomain: "farmer-touch.firebaseapp.com",
  projectId: "farmer-touch",
  storageBucket: "farmer-touch.appspot.com",
  messagingSenderId: "466063347554",
  appId: "1:466063347554:web:36fdc48e8098e127baa63b",
  measurementId: "G-65G49BZHRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
