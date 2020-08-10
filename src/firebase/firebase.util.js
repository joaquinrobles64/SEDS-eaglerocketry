import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC3-MH34RHs285611VjBuTO2sCH9Bfgh2Y",
  authDomain: "eagle-rocketry.firebaseapp.com",
  databaseURL: "https://eagle-rocketry.firebaseio.com",
  projectId: "eagle-rocketry",
  storageBucket: "eagle-rocketry.appspot.com",
  messagingSenderId: "497229310573",
  appId: "1:497229310573:web:6dd119adf9b4d7f53fed64",
  measurementId: "G-2BY00SJ45R",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.id}`);

  const snapShot = await userRef.get();

  if (!snapShot.exist) {
    const { displayName, email } = userAuth;
    const { createAt } = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
