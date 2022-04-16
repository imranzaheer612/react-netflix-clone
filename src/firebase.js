import { initializeApp }  from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { getFirestore } from "firebase/firestore" 

const firebaseConfig = {
    apiKey: "AIzaSyDQtGmm6edLExSRmK6btOPXAj5odJxxGDY",
    authDomain: "netflix-clone-97566.firebaseapp.com",
    projectId: "netflix-clone-97566",
    storageBucket: "netflix-clone-97566.appspot.com",
    messagingSenderId: "1004651244563",
    appId: "1:1004651244563:web:1cfa07587c1d05883e23e6",
    measurementId: "G-4CMYP69VXR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app)

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword }
export default db;