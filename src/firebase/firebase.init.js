// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZBWIQv38F2enRsVYJVN6axADq7s2mXQo",
  authDomain: "news-site-auth.firebaseapp.com",
  projectId: "news-site-auth",
  storageBucket: "news-site-auth.appspot.com",
  messagingSenderId: "594295413022",
  appId: "1:594295413022:web:714c2be74e230ccbc3510f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
