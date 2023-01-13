import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCUOzyMcjbzdaCqsGtsxkfd41eZRUuVP1A",
  authDomain: "retrogamez007.firebaseapp.com",
  projectId: "retrogamez007",
  storageBucket: "retrogamez007.appspot.com",
  messagingSenderId: "271097886210",
  appId: "1:271097886210:web:ce54ba53a1d9c0e68e191b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

export default db;
