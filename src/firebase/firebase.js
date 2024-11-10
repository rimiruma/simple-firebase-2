// Do not store config on the client side

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcDwYNq80K0Ea3pbJAfLhGqbJPOP-TdLM",
  authDomain: "simple-firebase-2-f3170.firebaseapp.com",
  projectId: "simple-firebase-2-f3170",
  storageBucket: "simple-firebase-2-f3170.firebasestorage.app",
  messagingSenderId: "559475702067",
  appId: "1:559475702067:web:c3637e02e03f381c3e2646"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;