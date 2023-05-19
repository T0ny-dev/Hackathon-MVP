// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQLunZUP0aVqiza4u61HyrmOmNbFqo_9M",
  authDomain: "db-hackthon.firebaseapp.com",
  projectId: "db-hackthon",
  storageBucket: "db-hackthon.appspot.com",
  messagingSenderId: "87341325215",
  appId: "1:87341325215:web:621c9aa648bba988293baa",
  measurementId: "G-0BWZ4Z1GP2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)