// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp6dzkMKD3saj9RCBjGNfjo_JKLDKtVrA",
  authDomain: "netflixgpt-27287.firebaseapp.com",
  projectId: "netflixgpt-27287",
  storageBucket: "netflixgpt-27287.firebasestorage.app",
  messagingSenderId: "981098524766",
  appId: "1:981098524766:web:4f7705b1e8a066c28184cf",
  measurementId: "G-37YKSBW7SH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();