// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg7Huh5Any2GYohlGI207MsFm98rrmV0Y",
  authDomain: "todolist-14e00.firebaseapp.com",
  projectId: "todolist-14e00",
  storageBucket: "todolist-14e00.appspot.com",
  messagingSenderId: "771487212889",
  appId: "1:771487212889:web:66874bb12af44bda75d848",
  measurementId: "G-ML41N1XY9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)