import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCJL4NGnJwCBQP8xKDk4R_ukyPDktur7_k",
  authDomain: "music-fd43e.firebaseapp.com",
  projectId: "music-fd43e",
  storageBucket: "music-fd43e.appspot.com",
  messagingSenderId: "948620613663",
  appId: "1:948620613663:web:417bb73b1a9ace46055d2a",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");
export {
  auth,
  db,
  storage,
  usersCollection,
  songsCollection,
  commentsCollection,
};
