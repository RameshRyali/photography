// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
    const firebaseConfig = {
        apiKey: "AIzaSyDfYWG1ZLZArvYAFke4yKYwmMsQp6ebSNQ",
        authDomain: "photograph-255e1.firebaseapp.com",
        projectId: "photograph-255e1",
        storageBucket: "photograph-255e1.firebasestorage.app",
        messagingSenderId: "362959735243",
        appId: "1:362959735243:web:411501020145af6b4dce4e"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    export const auth = getAuth(app);
    export const db = getFirestore(app);