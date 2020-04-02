import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC42vCOt1FBKK2JWGEEm7nncRz0aW9kFms",
    authDomain: "react-uas.firebaseapp.com",
    databaseURL: "https://react-uas.firebaseio.com",
    projectId: "react-uas",
    storageBucket: "react-uas.appspot.com",
    messagingSenderId: "585569943275",
    appId: "1:585569943275:web:1e906806783491663948ae"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;