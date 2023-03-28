import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0yqpmP0r-AXjBE0jmD2inV9BWDeaJDrg",
  authDomain: "factorial-af705.firebaseapp.com",
  projectId: "factorial-af705",
  storageBucket: "factorial-af705.appspot.com",
  messagingSenderId: "919933425746",
  appId: "1:919933425746:web:5b3543191560321835678b",
  measurementId: "G-2WQMKFQZGL",
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export { firebase };
