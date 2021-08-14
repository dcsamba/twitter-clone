
import Firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAgjvxiusZNbXfjNa4ifl_Bo-GKys12faQ",
    authDomain: "twitter-clone-b9be0.firebaseapp.com",
    projectId: "twitter-clone-b9be0",
    storageBucket: "twitter-clone-b9be0.appspot.com",
    messagingSenderId: "1082445463936",
    appId: "1:1082445463936:web:c7ef9ae4d118ee741b0165",
    measurementId: "G-C7B5JN9N7X"
  };

  const firebaseApp = Firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;
