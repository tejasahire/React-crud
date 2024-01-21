// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYz1YLWrPZw6gjlIINXCLsCSzZJIQ9nIg",
  authDomain: "react-crud-82532.firebaseapp.com",
  projectId: "react-crud-82532",
  storageBucket: "react-crud-82532.appspot.com",
  messagingSenderId: "66755012451",
  appId: "1:66755012451:web:f35ea218248d6cd7729556"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)