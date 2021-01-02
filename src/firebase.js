import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCc38Ht446vdKLURxkWfBmu6QgWJz9x0qQ",
  authDomain: "fb-clone-73a7f.firebaseapp.com",
  projectId: "fb-clone-73a7f",
  storageBucket: "fb-clone-73a7f.appspot.com",
  messagingSenderId: "299961032634",
  appId: "1:299961032634:web:14fb2ef0cf1c381d170783",
  measurementId: "G-FCVTEQLGZ5"
}
//Initialize the app
const firebaseApp = firebase.initializeApp(firebaseConfig);

//Initialize database
const db = firebaseApp.firestore();

//Initialize auth handle for accessing authentication
const auth = firebase.auth();

//Initialize provider
const provider  = new firebase.auth.GoogleAuthProvider();

export {auth, provider};

export default db;