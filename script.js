import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { onAuthStateChanged }from "firebase/auth"

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Signed in:", user.email);
  } else {
    console.log("Not logged in");
  }
});
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjhyIK5atVosPQUWxn0xnyzi6i4FnuzwY",
  authDomain: "fashapp-14471.firebaseapp.com",
  projectId: "fashapp-14471",
  storageBucket: "fashapp-14471.firebasestorage.app",
  messagingSenderId: "672443593250",
  appId: "1:672443593250:web:ea40853db2cbb696df107b",
  measurementId: "G-0WGVJYPZ4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)