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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`); //gets the user by his UID

  const snapshot = await userRef.get(); //.get() means snapshot object stores the data of the user

  //there is a exist property in the userRef.get()
  // which illustrates if the user is present in the database or not
  // if the user is not in the data base -> !snapshot.exist then
  // we will store the user data in firestore👇
  if (!snapshot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user-->", error);
    }
  }
  return userRef;
};

export default firebase;
