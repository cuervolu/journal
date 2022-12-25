// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLK86mpdyAYolJRg-0FamEbtiss7by7qc",
    authDomain: "react-curso-b24cb.firebaseapp.com",
    projectId: "react-curso-b24cb",
    storageBucket: "react-curso-b24cb.appspot.com",
    messagingSenderId: "390472807892",
    appId: "1:390472807892:web:cda43aa4377b0a4e405241"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);