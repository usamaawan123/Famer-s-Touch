import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCqxkjrjtg1VMOPVWdDoBtPvkQNq40GTac",
    authDomain: "farmer-touch.firebaseapp.com",
    projectId: "farmer-touch",
    storageBucket: "farmer-touch.appspot.com",
    messagingSenderId: "466063347554",
    appId: "1:466063347554:web:36fdc48e8098e127baa63b",
    measurementId: "G-65G49BZHRP"
};
firebase.initializeApp(firebaseConfig);
export {firebase};
