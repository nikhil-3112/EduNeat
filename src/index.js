import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFOvn4Wnvr79Gt4Svo5_1IibAnLTbgouU",
    authDomain: "EduNeat-dbdeb.firebaseapp.com",
    projectId: "EduNeat-dbdeb",
    storageBucket: "EduNeat-dbdeb.appspot.com",
    messagingSenderId: "228460765976",
    appId: "1:228460765976:web:9e7b1c58c75f51045f346d",
    measurementId: "G-96FV7MP657"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

