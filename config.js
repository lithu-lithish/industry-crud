import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7a1to1zEUaq18b2dB9IPkhoNFqPFkM0o",
  authDomain: "newreactnative-25856.firebaseapp.com",
  projectId: "newreactnative-25856",
  storageBucket: "newreactnative-25856.appspot.com",
  messagingSenderId: "295925615142",
  appId: "1:295925615142:web:4434aeddcf030baa86b4e7",
  measurementId: "G-CWYJ5ZKVX3",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
