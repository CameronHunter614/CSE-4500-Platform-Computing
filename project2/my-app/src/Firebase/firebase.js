// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ6O70IwB5zx91LParqxGRmVkD4F05aCQ",
  authDomain: "metric-tracking.firebaseapp.com",
  projectId: "metric-tracking",
  storageBucket: "metric-tracking.appspot.com",
  messagingSenderId: "190551817822",
  appId: "1:190551817822:web:fd946072bd5d5e07bc7ecf",
  measurementId: "G-GG68SE1TRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app)