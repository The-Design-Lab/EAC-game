// Import the functions you need from the SDKs you need

// Your web app's Firebase configuration
import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyDd-PWgGtbh-D48JHbkd7fDhryYtAP1ZKA",
  authDomain: "eac-game-c6270.firebaseapp.com",
  projectId: "eac-game-c6270",
  storageBucket: "eac-game-c6270.appspot.com",
  messagingSenderId: "307924863186",
  appId: "307924863186:web:49a2d9e13cfb9b682ac50b",
});

// Initialize Firebase
const db = firebase.firestore();
const scoresRef = db.collection("scoreboard");

export default scoresRef;
