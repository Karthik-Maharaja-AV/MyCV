// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIzM_-9_a3eWV7AbIyjXXhVQvMqR4bo-c",
  authDomain: "mycv-5dd4b.firebaseapp.com",
  projectId: "mycv-5dd4b",
  storageBucket: "mycv-5dd4b.appspot.com",
  messagingSenderId: "777192909770",
  appId: "1:777192909770:web:3a54baacde8941ba983d33",
  measurementId: "G-DQTRCJ7RWG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);