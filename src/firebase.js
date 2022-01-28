import * as firebase from 'firebase/app'
import { getFirestore, /* query, */ collection/* , where */ } from "firebase/firestore"

const config = {
    apiKey: "AIzaSyAX4kriredty5iWp8e5g2Gn2xlnOOcnXlk",
    authDomain: "pizza-planet-fe7fb.firebaseapp.com",
    projectId: "pizza-planet-fe7fb",
    storageBucket: "pizza-planet-fe7fb.appspot.com",
    messagingSenderId: "995899992239",
    appId: "1:995899992239:web:cc1b187a3092d71e7b0c5a"
}
firebase.initializeApp(config)
const db = getFirestore();

/* export const dbMenuRef = db.collection('menu') */
export const dbMenuRef = collection(db, 'menu');

