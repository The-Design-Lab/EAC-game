// Import the functions you need from the SDKs you need

// Your web app's Firebase configuration
import firebase from "firebase";

require("dotenv").config();

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
});

// Initialize Firebase
const db = firebase.firestore();
const scoresRef = db.collection("scoreboard");

export default scoresRef;
