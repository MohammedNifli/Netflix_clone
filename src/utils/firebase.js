// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import getAuth from firebase/auth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtFjvXlMYt7zgCXImgzqSF1HQUtww3VzA",
  authDomain: "netflix-clone-e0ed2.firebaseapp.com",
  projectId: "netflix-clone-e0ed2",
  storageBucket: "netflix-clone-e0ed2.appspot.com",
  messagingSenderId: "1082476015044",
  appId: "1:1082476015044:web:13a6b048c1d15efb960891",
  measurementId: "G-RBGXG3TEWR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app); // Initialize and export auth
