import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBy5f8CiwL-1n__S8YL4QbCs4ymXntanN0",
    authDomain: "velvet-guitars.firebaseapp.com",
    projectId: "velvet-guitars",
    storageBucket: "velvet-guitars.firebasestorage.app",
    messagingSenderId: "671792097371",
    appId: "1:671792097371:web:3c97f5b07763320282377e",
    measurementId: "G-2LJZY15Z1B"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);