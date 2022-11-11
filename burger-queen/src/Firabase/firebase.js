// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiUNHJeMtB9OBqlbwKlJpL1Nm7dVO6mT8",
  authDomain: "smoke-burger-queen.firebaseapp.com",
  projectId: "smoke-burger-queen",
  storageBucket: "smoke-burger-queen.appspot.com",
  messagingSenderId: "317135197899",
  appId: "1:317135197899:web:98d45185b2938c8db12d4e",
  measurementId: "G-T7VHEKZYLS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};