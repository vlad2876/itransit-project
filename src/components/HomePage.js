import React from 'react';
import firebase from "firebase/compat";


const HomePage = () => {

    const tasks = []

    firebase.firestore().collection('tasks').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            for (let i = 0; i < 2; i++) {
                tasks [i] = {
                    themeValue: doc.data().theme,
                    titleValue: doc.data().title,
                    tagsValue: doc.data().tags,
                    taskValue: doc.data().task
                }
            }
        })
    })
    return (
        <div></div>
    );
};

export default HomePage;