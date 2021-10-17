import React, {useContext} from 'react';
import firebase from "../config/firebase-config";
import {Spinner, Table} from "react-bootstrap";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Redirect} from "react-router-dom";
import {HOMEPAGE_ROUTE} from "../utils/consts";


const TableItem = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    let db = firebase.firestore();

    const taskTable = document.querySelector('#task-table');


    function addToTaskList(doc) {
        let tr = document.createElement('tr');
        let theme = document.createElement('td');
        let title = document.createElement('td');
        let tags = document.createElement('td');
        let task = document.createElement('td');
        let answer1 = document.createElement('td');
        let answer2 = document.createElement('td');
        let answer3 = document.createElement('td');
        let cross = document.createElement('div');

        tr.setAttribute('data-id', doc.id);
        theme.textContent = doc.data().theme;
        title.textContent = doc.data().title;
        tags.textContent = doc.data().tags;
        task.textContent = doc.data().task;
        answer1.textContent = doc.data().answer1;
        answer2.textContent = doc.data().answer2;
        answer3.textContent = doc.data().answer3;
        cross.textContent = 'x';
        cross.className = "deleteButton bg-danger"
        tr.appendChild(title);
        tr.appendChild(theme);
        tr.appendChild(tags);
        tr.appendChild(task);
        tr.appendChild(answer1);
        tr.appendChild(answer2);
        tr.appendChild(answer3);
        tr.appendChild(cross);
        cross.addEventListener('click', (e) => {
            e.stopPropagation();
            let id = e.target.parentElement.getAttribute('data-id');
            db.collection('tasks').doc(id).delete();
        })

        taskTable?.appendChild(tr)
    }
if (user) {
    db.collection('tasks').where('username', '==', user.displayName).get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            addToTaskList(doc)
        })
    })
}
    return (
        <Table className="w-50 mt-3" striped bordered responsive>
            <thead>
            <tr>
                <th>Theme</th>
                <th>Title</th>
                <th>Tags</th>
                <th>Task</th>
                <th>Answer 1</th>
                <th>Answer 2</th>
                <th>Answer 3</th>
                <th className="deleteColumn"/>
            </tr>
            </thead>
            <tbody id="task-table">

            </tbody>
        </Table>
    );
};

export default TableItem;