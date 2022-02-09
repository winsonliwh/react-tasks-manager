import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCf35ObNAkM2uiOUrxYqch8okPfP2KJToQ",
    authDomain: "task-manager-2b341.firebaseapp.com",
    databaseURL: "https://task-manager-2b341-default-rtdb.firebaseio.com",
    projectId: "task-manager-2b341",
    storageBucket: "task-manager-2b341.appspot.com",
    messagingSenderId: "2450672362",
    appId: "1:2450672362:web:85dbf9cd7b1cc12387e593",
    measurementId: "G-GCYTC98NKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();