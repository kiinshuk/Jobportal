// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb7uqkLDiVYz2TxarMjyKvydBhuKcQtJU",
  authDomain: "online-jobportal-2aa82.firebaseapp.com",
  projectId: "online-jobportal-2aa82",
  storageBucket: "online-jobportal-2aa82.firebasestorage.app",
  messagingSenderId: "588399036566",
  appId: "1:588399036566:web:cd398ce83b10f366ea5ab7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export {db};