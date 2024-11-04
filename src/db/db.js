import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7m8N7Yb5tuqRLmRFn6sbJx38oBX7EfC0",
  authDomain: "react-ecomerce111.firebaseapp.com",
  projectId: "react-ecomerce111",
  storageBucket: "react-ecomerce111.appspot.com",
  messagingSenderId: "29346875624",
  appId: "1:29346875624:web:d26e909bbc0fb067bee15d"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db;