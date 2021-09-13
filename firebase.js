import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBzQ5Y8ms5jHKyXmEghB6xui0myoNebRwU",
  authDomain: "taboo-29f9d.firebaseapp.com",
  projectId: "taboo-29f9d",
  storageBucket: "taboo-29f9d.appspot.com",
  messagingSenderId: "918313190013",
  appId: "1:918313190013:web:a8df193f451a137a2ee714",
  measurementId: "G-ZHL3D7F4NE",
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
