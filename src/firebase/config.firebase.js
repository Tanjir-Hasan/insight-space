// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKocOK_7LcJl93rxsZhFu2CihQXChabxo",
  authDomain: "insight-space-f2643.firebaseapp.com",
  projectId: "insight-space-f2643",
  storageBucket: "insight-space-f2643.appspot.com",
  messagingSenderId: "704133890570",
  appId: "1:704133890570:web:09ce38f8a68e2b331f95f3"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app)
export const db = getFirestore(app)
