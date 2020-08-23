import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

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

// methods to handle user creation and updates

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const isAdmin = false;
    const isVerified = false;
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        isAdmin,
        isVerified,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const updateUserProfileDocument = async (userAuth, userInfo) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (snapShot.exists) {
    const updateAt = new Date();
    try {
      await userRef.update({
        updateAt,
        ...userInfo,
      });
    } catch (error) {
      console.log("error updating user", error.message);
    }
  }
};

export const updateUserProfilePicture = async (userAuth, file) => {
  if (!userAuth) return;

  try {
    const fileType = file.name.split(".").pop();

    const storageRef = firebase
      .storage()
      .ref(`${userAuth.uid}/profilepicture/image.` + fileType);

    await storageRef.put(file);

    const photoURL = await storageRef.getDownloadURL();
    await updateUserProfileDocument(userAuth, { photoURL: photoURL });
  } catch (error) {
    console.log("error updating user profile picture", error.message);
  }
};

firebase.initializeApp(config);

//gets user collection

export const userCollection = [];

const userCollectionRef = firebase.firestore().collection("users");
userCollectionRef.onSnapshot((users) => {
  users.forEach((user) => {
    if (user.data().isVerified) {
      userCollection.push(user.data());
    }
  });
});

// exporting some defaults 

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
