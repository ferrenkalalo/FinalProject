import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDv4iE6kT1hYjkbuhlCnpvNQ951y6_EVfE",
    authDomain: "webprogramming-39f53.firebaseapp.com",
    databaseURL: "https://webprogramming-39f53-default-rtdb.firebaseio.com",
    projectId: "webprogramming-39f53",
    storageBucket: "webprogramming-39f53.appspot.com",
    messagingSenderId: "630179176608",
    appId: "1:630179176608:web:6411d1f88a49f0ad4829c5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;