// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVxRtvnCeB9EAXV7QaD4rRnq1IhbYqGvg",
  authDomain: "my-toy-shop-c6e58.firebaseapp.com",
  projectId: "my-toy-shop-c6e58",
  storageBucket: "my-toy-shop-c6e58.appspot.com",
  messagingSenderId: "727249159424",
  appId: "1:727249159424:web:4ff0232b84c14824f35fe5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app