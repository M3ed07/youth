// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC0jkpA3iDwVrKFDBwXkYUSEfXc8yYbJSY",
  authDomain: "sybg-youth.firebaseapp.com",
  projectId: "sybg-youth",
  storageBucket: "sybg-youth.appspot.com",
  messagingSenderId: "174857384512",
  appId: "1:174857384512:web:46865856814983a919a5a5",
  measurementId: "G-EKJ2MD4V6B"
};

const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      localStorage.setItem('token', token);
      window.location.href = '/home';
    })
    .catch((error) => {
      console.log(error);
    });
};