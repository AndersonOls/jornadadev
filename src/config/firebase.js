// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzfEH5lVueCwqWDLqUCPsMO4E5VI_92tI",
  authDomain: "tiktok-clone-b05ab.firebaseapp.com",
  projectId: "tiktok-clone-b05ab",
  storageBucket: "tiktok-clone-b05ab.appspot.com",
  messagingSenderId: "681721690963",
  appId: "1:681721690963:web:8514000be1f38271747fa6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;