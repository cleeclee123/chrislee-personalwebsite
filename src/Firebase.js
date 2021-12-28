import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDKWDtqWJaan6PIxIVqLdN0gUxbNL8K9FA",
  authDomain: "personal-website-8a16e.firebaseapp.com",
  projectId: "personal-website-8a16e",
  storageBucket: "personal-website-8a16e.appspot.com",
  messagingSenderId: "808818432947",
  appId: "1:808818432947:web:1df330038e4257235749c6"
};

const firestore = getFirestore();
const app = initializeApp(firebaseConfig);