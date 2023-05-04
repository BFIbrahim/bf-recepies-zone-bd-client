// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZOKbJ0SjNkgrgmEOSJaX3nqAsWq8vgeM",
  authDomain: "bf-recipes-zone-bd.firebaseapp.com",
  projectId: "bf-recipes-zone-bd",
  storageBucket: "bf-recipes-zone-bd.appspot.com",
  messagingSenderId: "576260270786",
  appId: "1:576260270786:web:eba5b79a26a899104ba95b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app