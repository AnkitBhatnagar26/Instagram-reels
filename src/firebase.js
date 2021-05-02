import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBFVS1Wb7eLDvOdxHdwZvgubIE0SE2br4g",
    authDomain: "instagram-reels-a9a0e.firebaseapp.com",
    projectId: "instagram-reels-a9a0e",
    storageBucket: "instagram-reels-a9a0e.appspot.com",
    messagingSenderId: "352421405159",
    appId: "1:352421405159:web:b10f65fb735a954c3ddd42",
    measurementId: "G-ZH3T4HSZSB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;
