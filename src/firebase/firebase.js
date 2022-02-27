import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCuJ4zc_dw8KOPlT77Uq3ebAofqVYNeRUs",
  authDomain: "clone-39399.firebaseapp.com",
  projectId: "clone-39399",
  storageBucket: "clone-39399.appspot.com",
  messagingSenderId: "1099275867994",
  appId: "1:1099275867994:web:83dc304164f12e26cd0563",
  measurementId: "G-591V3W8D5W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const dataBase = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { dataBase, auth, provider };