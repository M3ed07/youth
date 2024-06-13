// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0jkpA3iDwVrKFDBwXkYUSEfXc8yYbJSY",
  authDomain: "sybg-youth.firebaseapp.com",
  projectId: "sybg-youth",
  storageBucket: "sybg-youth.appspot.com",
  messagingSenderId: "174857384512",
  appId: "1:174857384512:web:46865856814983a919a5a5",
  measurementId: "G-EKJ2MD4V6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);