import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase/compat';
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyAQNYXmztXekA2Db4qQ4W9h9xCqvfYsADY",
    authDomain: "itransit-37a98.firebaseapp.com",
    projectId: "itransit-37a98",
    storageBucket: "itransit-37a98.appspot.com",
    messagingSenderId: "383979156170",
    appId: "1:383979156170:web:aafa8bbc1f382e8986ba33",
    measurementId: "G-T79FR0EZV1"});

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);


