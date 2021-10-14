import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";

const CreateTask = () => {
    return (
        <div className="container">
            <header className="taskHeader">
                <Form>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="justify-content-center d-flex mt-5">
                            <Form.Check
                                inline
                                label="Geometry"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                            />
                            <Form.Check
                                inline
                                label="Logic"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                            <Form.Check
                                inline
                                label="Maths"
                                name="group1"
                                type={type}
                                id={`inline-${type}-3`}
                            />
                        </div>
                    ))}
                    <Row className="mt-5">
                        <Col>
                            <Form.Control placeholder="Title"/>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Tags"/>
                        </Col>

                    </Row>
                    <Row className="mt-5">
                        <Col>
                            <Form.Control placeholder="Task"/>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col>
                            <Form.Control placeholder="Possible answer 1"/>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Possible answer 2"/>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Possible answer 3"/>
                        </Col>
                    </Row>
                </Form>
                <div className="text-center">
                <Button variant="outline-success" className="mt-5">Submit</Button>
                </div>
            </header>
        </div>
    );
};

export default CreateTask;