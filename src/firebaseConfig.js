import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDAvHBcQgwDFRcklpKAWS76OnAk3FazRyY",
  authDomain: "retrogames-da321.firebaseapp.com",
  projectId: "retrogames-da321",
  storageBucket: "retrogames-da321.appspot.com",
  messagingSenderId: "503725030412",
  appId: "1:503725030412:web:ff90153133baeab9dcc229",
  measurementId: "G-2QZPM905DM"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

export default db;
