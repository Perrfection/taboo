import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDFGjyKn56yo_Y7k32QQOgjtP5tXD9Jv-s",
  authDomain: "taboo-3678e.firebaseapp.com",
  projectId: "taboo-3678e",
  storageBucket: "taboo-3678e.appspot.com",
  messagingSenderId: "1048558338458",
  appId: "1:1048558338458:web:90b5f35b348d4f8e9a7a23"
};

const firebaseApp = firebase.intializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, storage, provider};