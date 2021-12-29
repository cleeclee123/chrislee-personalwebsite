import Firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDKWDtqWJaan6PIxIVqLdN0gUxbNL8K9FA",
  authDomain: "personal-website-8a16e.firebaseapp.com",
  projectId: "personal-website-8a16e",
  storageBucket: "personal-website-8a16e.appspot.com",
  messagingSenderId: "808818432947",
  appId: "1:808818432947:web:4da938ca63d39f345749c6"
};

const firebase = Firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
  
export { firebase, db };