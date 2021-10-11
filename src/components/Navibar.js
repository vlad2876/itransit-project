import React, {useContext} from 'react';
import {Navbar, Nav, Button} from "react-bootstrap";
import {ADMIN_ROUTE, CREATE_TASK_ROUTE, HOMEPAGE_ROUTE, PROFILE_ROUTE} from "../utils/consts";
import {Context} from "../index";
import firebase from "firebase/compat";


export default function NaviBar() {

    const {auth} = useContext(Context)

    const login = async () => {
      const provider = new firebase.auth.FacebookAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
    }


    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href={HOMEPAGE_ROUTE}>Home</Nav.Link>
                    <Nav.Link href={ADMIN_ROUTE}>Admin Page</Nav.Link>
                    <Nav.Link href={CREATE_TASK_ROUTE}>Create Task</Nav.Link>
                    <Nav.Link href={PROFILE_ROUTE}>Profile</Nav.Link>
                </Nav>
                <Nav>
                    <Button variant="primary" >VK</Button>
                    <Button onClick={login}>Facebook</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}