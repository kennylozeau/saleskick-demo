// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//Replace the object with the given Firebase Initialization object
const API_PLACEHOLDER = {};

const firebaseConfig = API_PLACEHOLDER;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);