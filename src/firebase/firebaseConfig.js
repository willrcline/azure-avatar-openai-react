// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5ingwP_xyBXLFgINrSjGeH93QkR44iM0",
  authDomain: "portfolio-d3613.firebaseapp.com",
  projectId: "portfolio-d3613",
  storageBucket: "portfolio-d3613.appspot.com",
  messagingSenderId: "482182374881",
  appId: "1:482182374881:web:a8f8922143e834c88e1ea0",
  measurementId: "G-0GC4JYJLNE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;