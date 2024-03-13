// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbJRK17uvv2cnNx-t7t1mfIOO4KmL1fwc",
  authDomain: "eduneat-86094.firebaseapp.com",
  projectId: "eduneat-86094",
  storageBucket: "eduneat-86094.appspot.com",
  messagingSenderId: "282933293951",
  appId: "1:282933293951:web:62645682a3ecd0295c604a",
  measurementId: "G-SLDC53YRCK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);