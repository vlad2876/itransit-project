import React, {useContext, useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import firebase from "../config/firebase-config";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import Select from "react-select";


const CreateTask = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    const [theme, setTheme] = useState(),
        [title, setTitle] = useState(),
        [tags, setTags] = useState(),
        [task, setTask] = useState(),
        [answer1, setAnswer1] = useState(),
        [answer2, setAnswer2] = useState(),
        [answer3, setAnswer3] = useState()
    let db = firebase.firestore()


    function clearFields() {
        setTheme(undefined)
        setTitle('')
        setTags('')
        setTask('')
        setAnswer1('')
        setAnswer2('')
        setAnswer3('')
    }


    const createTask = async () => {
        await db.collection('tasks').add({
            username: user.displayName,
            theme: theme === undefined ? 'None' : theme,
            title: title === undefined ? 'None' : title,
            tags: tags === undefined ? 'None' : tags,
            task: task === undefined ? 'None' : task,
            answer1: answer1 === undefined ? 'None' : answer1,
            answer2: answer2 === undefined ? 'None' : answer2,
            answer3: answer3 === undefined ? 'None' : answer3
        })
        clearFields()
    }

    const selectData = (e) => {
        setTheme(e.target.value)
    }

    return (
        <div className="container">
            <header className="taskHeader">
                <Form>
                    <Row className="mt-5">
                        <Col>
                            <select className="form-select" onChange={selectData}>
                                <option selected value="None">Select theme...</option>
                                <option value="Maths">Maths</option>
                                <option value="Logic">Logic</option>
                                <option value="Geometry">Geometry</option>
                            </select>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Title" value={title}
                                          onChange={event => setTitle(event.target.value)}/>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Tags" value={tags}
                                          onChange={event => setTags(event.target.value)}/>
                        </Col>

                    </Row>
                    <Row className="mt-5">
                        <Col>
                            <Form.Control placeholder="Task" value={task}
                                          onChange={event => setTask(event.target.value)}/>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col>
                            <Form.Control placeholder="Answer 1"
                                          value={answer1} onChange={event => setAnswer1(event.target.value)}/>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Answer 2"
                                          value={answer2} onChange={event => setAnswer2(event.target.value)}/>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Answer 3"
                                          value={answer3} onChange={event => setAnswer3(event.target.value)}/>
                        </Col>
                    </Row>
                </Form>
                <div className="text-center">
                    <Button onClick={createTask} variant="outline-success" className="mt-5">Submit</Button>
                </div>
            </header>
        </div>
    );

};

export default CreateTask;