// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgEAQ5gaE_p9onhfD7GmVMGtfDtYCzjLE",
  authDomain: "the-news-dragon-dc64c.firebaseapp.com",
  projectId: "the-news-dragon-dc64c",
  storageBucket: "the-news-dragon-dc64c.appspot.com",
  messagingSenderId: "997170377013",
  appId: "1:997170377013:web:98f9d023a1f9a9eda8dc7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;