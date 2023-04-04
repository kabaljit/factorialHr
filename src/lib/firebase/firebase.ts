import { Auth, getAuth, initializeAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { Firestore, getFirestore } from "firebase/firestore";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence } from "firebase/auth/react-native";
import { getApps, getApp, FirebaseApp } from "firebase/app/";

const firebaseConfig = {
  apiKey: "AIzaSyB0yqpmP0r-AXjBE0jmD2inV9BWDeaJDrg",
  authDomain: "factorial-af705.firebaseapp.com",
  projectId: "factorial-af705",
  storageBucket: "factorial-af705.appspot.com",
  messagingSenderId: "919933425746",
  appId: "1:919933425746:web:5b3543191560321835678b",
  measurementId: "G-2WQMKFQZGL",
};

let app: FirebaseApp;
let auth: Auth;
let firestore: Firestore;

if (getApps().length === 0) {
  app = firebase.initializeApp(firebaseConfig);
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });

  firestore = getFirestore(app);
} else {
  app = getApp();
  auth = getAuth(app);
  firestore = getFirestore(app);
}

export { firebase, app, auth, firestore };
