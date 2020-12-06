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

// Google authentication 👇
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

// Facebook Authentication 👇
const fbProvider = new firebase.auth.FacebookAuthProvider();
fbProvider.setCustomParameters({
  prompt: "select_account",
});
export const SignInWithFacebook = () => auth.signInWithPopup(fbProvider);

// Github Authentication 👇
const gProvider = new firebase.auth.GithubAuthProvider();
gProvider.setCustomParameters({
  prompt: "select_account",
});
export const SignInWithGithub = () => auth.signInWithPopup(gProvider);

export default firebase;
