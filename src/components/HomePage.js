import React from 'react';
import firebase from "../config/firebase-config";

const HomePage = () => {

    let db = firebase.firestore();
    let answerValue = ''

    const taskList = document.querySelector('#task-list');

    function renderTask(doc) {
        let li = document.createElement('li');
        let theme = document.createElement('span');
        let title = document.createElement('span');
        let tags = document.createElement('span');
        let task = document.createElement('span');
        let answer = document.createElement('input')
        let submit = document.createElement('button')


        li.setAttribute('data-id', doc.id);
        theme.textContent = ('Theme: ' + doc.data().theme);
        title.textContent = doc.data().title;
        tags.textContent = ('#' + doc.data().tags);
        task.textContent = doc.data().task;
        submit.textContent = "Submit"
        submit.className = "submitAnswer"
        answer.placeholder = "Your answer"
        answer.className = "answerInput"
        submit.setAttribute('name', 'answerField')
        answer.setAttribute('name', 'answerField')

        title.className = "title";

        li.appendChild(title);
        li.appendChild(theme);
        li.appendChild(tags);
        li.appendChild(task);
        li.appendChild(answer);
        li.appendChild(submit)
        answer.addEventListener('input', function () {
            answerValue = this.value.toLowerCase()
        })
        submit.addEventListener('click', (e) => {
            e.stopPropagation();
            let id = e.target.parentElement.getAttribute('data-id');
            db.collection('tasks').doc(id).get().then((snapshot) => {
                if (answerValue === snapshot.data().answer1) {
                    alert("Correct decision!")
                    answer.remove()
                    submit.remove()
                    let correct = document.createElement('span')
                    correct.textContent = "Correct!"
                    correct.className = "text-center"
                    li.appendChild(correct)
                } else if (answerValue === snapshot.data().answer2) {
                    alert("Correct decision!")
                } else if (answerValue === snapshot.data().answer3) {
                    alert("Correct decision!")
                } else {
                    alert("Wrong decision!")
                }
            })
        })

        taskList?.appendChild(li);
    }

    db.collection('tasks').onSnapshot(snapshot => {
        let changes = snapshot.docChanges()
        changes.forEach(change => {
            if (change.type === 'added') {
                renderTask(change.doc)
            }
        })
    })

    return (
        <div className="content">
            <ul id="task-list">

            </ul>

        </div>
    );
};

export default HomePage;