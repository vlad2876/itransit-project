import React, {useContext} from 'react';
import {Navbar, Nav, Button} from "react-bootstrap";
import {CREATE_TASK_ROUTE, HOMEPAGE_ROUTE, PROFILE_ROUTE} from "../utils/consts";
import {facebookProvider, googleProvider} from "../config/authMethods";
import socialMediaAuth from "../service/auth";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

export default function NaviBar() {
    let {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    const handleOnClick = async (provider) => {
        auth = await socialMediaAuth(provider)
    };
    console.log(user)
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href={HOMEPAGE_ROUTE}>Home</Nav.Link>
                    <Nav.Link href={CREATE_TASK_ROUTE}>Create Task</Nav.Link>
                    <Nav.Link href={PROFILE_ROUTE}>Profile</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Nav>
                {user ?
                    <Button variant="danger" onClick={() => auth.signOut()} className="me-2">Logout</Button>
                    :
                    <>
                        <Button variant="outline-primary" onClick={() => handleOnClick(facebookProvider)} className="me-2">Facebook</Button>
                        <Button variant="outline-warning" onClick={() => handleOnClick(googleProvider)} className="me-2">Google</Button>
                    </>
                }
            </Nav>
        </Navbar>

    )
}