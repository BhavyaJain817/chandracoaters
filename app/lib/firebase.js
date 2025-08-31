// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTlluYjGP0iiAkYQbrP-uvg8kULZXtlIU",
  authDomain: "chandracoaters-c7406.firebaseapp.com",
  projectId: "chandracoaters-c7406",
  storageBucket: "chandracoaters-c7406.firebasestorage.app",
  messagingSenderId: "366235210271",
  appId: "1:366235210271:web:ab9f7e1aa8d1cc227abb2a",
  measurementId: "G-ZMNNGQTK47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Initialize Analytics only on client side
let analytics = null;
if (typeof window !== 'undefined') {
  isSupported().then(yes => yes ? getAnalytics(app) : null).then(analyticsInstance => {
    analytics = analyticsInstance;
  });
}

export { db, analytics, auth };