import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBSYKSqVBroYRHovQUmJwY8bRKamuXWa_I",
    authDomain: "next-auth-firebase-da301.firebaseapp.com",
    projectId: "next-auth-firebase-da301",
    storageBucket: "next-auth-firebase-da301.appspot.com",
    messagingSenderId: "512115629055",
    appId: "1:512115629055:web:063ca3120d1d8ddcfc65ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app