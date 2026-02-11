import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBa0A0svOv2ifXlDhdzT38J4qtYZdUI7Lo",
    authDomain: "project-ainav.firebaseapp.com",
    projectId: "project-ainav",
    storageBucket: "project-ainav.firebasestorage.app",
    messagingSenderId: "856024513068",
    appId: "1:856024513068:web:087f1578067de0e225ef89",
    measurementId: "G-B6W9BJM0MG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const analytics = getAnalytics(app);
