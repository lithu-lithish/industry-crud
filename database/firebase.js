import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyB7a1to1zEUaq18b2dB9IPkhoNFqPFkM0o",
  authDomain: "newreactnative-25856.firebaseapp.com",
  projectId: "newreactnative-25856",
  storageBucket: "newreactnative-25856.appspot.com",
  messagingSenderId: "295925615142",
  appId: "1:295925615142:web:4434aeddcf030baa86b4e7",
  measurementId: "G-CWYJ5ZKVX3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db,
};

// import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
// import firebase from "firebase";
// const firebaseConfig = {
//   apiKey: "AIzaSyB7a1to1zEUaq18b2dB9IPkhoNFqPFkM0o",
//   authDomain: "newreactnative-25856.firebaseapp.com",
//   projectId: "newreactnative-25856",
//   storageBucket: "newreactnative-25856.appspot.com",
//   messagingSenderId: "295925615142",
//   appId: "1:295925615142:web:4434aeddcf030baa86b4e7",
//   measurementId: "G-CWYJ5ZKVX3",
// };

// const app = initializeApp(firebaseConfig);
// const db = app(getFirestore);

// export { db, getFirestore, collection, addDoc, getDocs };

// const firebaseConfig = {
//   apiKey: "AIzaSyB7a1to1zEUaq18b2dB9IPkhoNFqPFkM0o",
//   authDomain: "newreactnative-25856.firebaseapp.com",
//   projectId: "newreactnative-25856",
//   storageBucket: "newreactnative-25856.appspot.com",
//   messagingSenderId: "295925615142",
//   appId: "1:295925615142:web:4434aeddcf030baa86b4e7",
//   measurementId: "G-CWYJ5ZKVX3",
// };
