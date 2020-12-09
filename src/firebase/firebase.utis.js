import firebase from "firebase";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC0tzSmdanD3vEcuT_Hc9bo3I2-JyZGhRY",
  authDomain: "berrytech-db.firebaseapp.com",
  projectId: "berrytech-db",
  storageBucket: "berrytech-db.appspot.com",
  messagingSenderId: "354075541340",
  appId: "1:354075541340:web:9073831f22b17cf58c4b99",
  measurementId: "G-M6J58XC8Z2",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccess: () => false,
  },
};

export default firebase;
