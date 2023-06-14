import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAz7Ujsnf6HAy1B62PNuMrqQH1hxW30aRA",
    authDomain: "project-designo-firebase.firebaseapp.com",
    projectId: "project-designo-firebase",
    storageBucket: "project-designo-firebase.appspot.com",
    messagingSenderId: "1096905123169",
    appId: "1:1096905123169:web:82fcd4f1b1fc2f71ead120"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export { auth, provider };