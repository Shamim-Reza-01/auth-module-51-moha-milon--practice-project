// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnuY-y5lb-HJDljtaKlnRkgyrHRIrgxDU",
  authDomain: "auth-module-51-moha-milon.firebaseapp.com",
  projectId: "auth-module-51-moha-milon",
  storageBucket: "auth-module-51-moha-milon.appspot.com",
  messagingSenderId: "616626444199",
  appId: "1:616626444199:web:b7ee0f5bf0f1ce27700882"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

