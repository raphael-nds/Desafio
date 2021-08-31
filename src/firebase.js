import firebase from 'firebase';
import 'firebase/firebase-auth'
import 'firebase/firebase-firestore'


var firebaseConfig = {
  apiKey: "AIzaSyAgmJtSUEQQidX0OkZaAfFKSn71gU6xd2A",
  authDomain: "meus--lugares.firebaseapp.com",
  projectId: "meus--lugares",
  storageBucket: "meus--lugares.appspot.com",
  messagingSenderId: "367369357482",
  appId: "1:367369357482:web:6c86d1faa681e55839a8d3",
  measurementId: "G-1JKEWVJNPZ"
};

//iniciar firebse
var fireDb = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();


export {auth, provider};
export default db;
