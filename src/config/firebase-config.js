import firebase from "firebase/compat";


const firebaseConfig = {
    apiKey: "AIzaSyAQNYXmztXekA2Db4qQ4W9h9xCqvfYsADY",
    authDomain: "itransit-37a98.firebaseapp.com",
    projectId: "itransit-37a98",
    storageBucket: "itransit-37a98.appspot.com",
    messagingSenderId: "383979156170",
    appId: "1:383979156170:web:aafa8bbc1f382e8986ba33",
    measurementId: "G-T79FR0EZV1"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;