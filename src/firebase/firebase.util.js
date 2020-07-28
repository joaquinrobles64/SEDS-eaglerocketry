import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyC3-MH34RHs285611VjBuTO2sCH9Bfgh2Y",
    authDomain: "eagle-rocketry.firebaseapp.com",
    databaseURL: "https://eagle-rocketry.firebaseio.com",
    projectId: "eagle-rocketry",
    storageBucket: "eagle-rocketry.appspot.com",
    messagingSenderId: "497229310573",
    appId: "1:497229310573:web:6dd119adf9b4d7f53fed64",
    measurementId: "G-2BY00SJ45R"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
