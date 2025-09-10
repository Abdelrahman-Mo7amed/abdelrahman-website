// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzLdrcnibXUv0MD3B5-vOeqqJSnvTcVZ0",
  authDomain: "portfolio-testimonials-70d0d.firebaseapp.com",
  projectId: "portfolio-testimonials-70d0d",
  storageBucket: "portfolio-testimonials-70d0d.firebasestorage.app",
  messagingSenderId: "628353997137",
  appId: "1:628353997137:web:f81df74e1dce0da8d0db70",
  measurementId: "G-2LPL3D9P44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);