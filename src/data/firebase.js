import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// move to .env.template file later
const firebaseConfig = {
	apiKey: "AIzaSyBX4Iyuep4lHfp1QPeNAQpA3BHnwezrOKs",
	authDomain: "eac-game.firebaseapp.com",
	projectId: "eac-game",
	storageBucket: "eac-game.appspot.com",
	messagingSenderId: "585949238886",
	appId: "1:585949238886:web:3ae69e3ad7b11792277fa7",
	measurementId: "G-PPFNMG7Q82",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default db;
