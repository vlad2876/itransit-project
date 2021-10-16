import React, {useContext} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Redirect} from "react-router-dom";
import {HOMEPAGE_ROUTE} from "../utils/consts";
import {Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table'
import firebase from "../config/firebase-config";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const Profile = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    let db = firebase.firestore();

    const taskTable = document.querySelector('#task-table');

    function addToTaskList(doc) {
        let Tr = document.createElement('Tr');
        let theme = document.createElement('Td');
        let title = document.createElement('Td');
        let tags = document.createElement('Td');
        let task = document.createElement('Td');
        let answer1 = document.createElement('Td');
        let answer2 = document.createElement('Td');
        let answer3 = document.createElement('Td');
        Tr.setAttribute('data-id', doc.id);
        theme.textContent = doc.data().theme;
        title.textContent = doc.data().title;
        tags.textContent = doc.data().tags;
        task.textContent = doc.data().task;
        answer1.textContent = doc.data().answer1;
        answer2.textContent = doc.data().answer2;
        answer3.textContent = doc.data().answer3;

        Tr.appendChild(title);
        Tr.appendChild(theme);
        Tr.appendChild(tags);
        Tr.appendChild(task);
        Tr.appendChild(answer1);
        Tr.appendChild(answer2);
        Tr.appendChild(answer3);

        taskTable.appendChild(Tr);
    }

    db.collection('tasks').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            addToTaskList(doc)
        })
    })

    if (user) {
        return (

            <div>
                <div className="d-flex align-items-center justify-content-start">
                    <img className="avatar" src={user.photoURL}/>
                    <h3 className="ms-3">{user.displayName}</h3>
                </div>
                <Table className="mt-5">
                    <Thead>
                        <Tr>
                            <Th>Theme</Th>
                            <Th>Title</Th>
                            <Th>Task</Th>
                            <Th>Tags</Th>
                            <Th>Answer 1</Th>
                            <Th>Answer 2</Th>
                            <Th>Answer 3</Th>
                        </Tr>
                    </Thead>
                    <Tbody id="task-table">

                    </Tbody>
                </Table>
            </div>

        );
    } else {
        return (
            <Redirect to={HOMEPAGE_ROUTE}/>
        )
    }
};

export default Profile;