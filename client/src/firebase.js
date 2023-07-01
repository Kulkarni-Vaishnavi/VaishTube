// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHuoaCRpefnnIUDVJqxf9ka0wKIGWQk_I",
    authDomain: "video-d8e9c.firebaseapp.com",
    projectId: "video-d8e9c",
    storageBucket: "video-d8e9c.appspot.com",
    messagingSenderId: "170622999712",
    appId: "1:170622999712:web:a879a021ad3330e8fd7dc5",
    measurementId: "G-4PGR0H5QHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;