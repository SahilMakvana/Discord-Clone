import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0cFF71OE3fv0zK5jgXtjBDX5cfrdUgmo",
    authDomain: "discord-clone-359a7.firebaseapp.com",
    databaseURL: "https://discord-clone-359a7.firebaseio.com",
    projectId: "discord-clone-359a7",
    storageBucket: "discord-clone-359a7.appspot.com",
    messagingSenderId: "217517118219",
    appId: "1:217517118219:web:6a5b689a4cdcd68616c80e",
    measurementId: "G-ENGBXWD9GR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;