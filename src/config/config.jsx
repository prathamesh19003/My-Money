import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDjnVQtundqJh64hLhBhvNA-47yIlZJR_c",
  authDomain: "mymoney-8d96b.firebaseapp.com",
  projectId: "mymoney-8d96b",
  storageBucket: "mymoney-8d96b.appspot.com",
  messagingSenderId: "878491641879",
  appId: "1:878491641879:web:838c735b7d05fa6a7a1452",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
