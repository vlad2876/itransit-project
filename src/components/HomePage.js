import React from 'react';
import firebase from "../config/firebase-config";
import {Container} from "react-bootstrap";


const HomePage = () => {
    let db = firebase.firestore();

    const taskList = document.querySelector('#task-list');

    function renderTask(doc) {
        let li = document.createElement('li');
        let theme = document.createElement('span');
        let title = document.createElement('span');
        let tags = document.createElement('span');
        let task = document.createElement('span');

        li.setAttribute('data-id', doc.id);
        theme.textContent = ('Theme: ' + doc.data().theme);
        title.textContent = doc.data().title;
        tags.textContent = ('#' + doc.data().tags);
        task.textContent = doc.data().task;
        theme.className = ""

        title.className = "title"

        li.appendChild(title);
        li.appendChild(theme);
        li.appendChild(tags);
        li.appendChild(task);

        taskList.appendChild(li);

    }

    db.collection('tasks').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            renderTask(doc)
        })
    })

    return (
        <div className="content">
            <ul id="task-list"></ul>
        </div>
    );
};

export default HomePage;