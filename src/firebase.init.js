 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGwMjRBqVJkWANf4U0I53L7K1vzvFCPQA",
  authDomain: "photrographer-project.firebaseapp.com",
  projectId: "photrographer-project",
  storageBucket: "photrographer-project.appspot.com",
  messagingSenderId: "536650422193",
  appId: "1:536650422193:web:3a048e45a02edc24dccf90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)