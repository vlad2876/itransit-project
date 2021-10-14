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
                <Nav className="mr-auto">
                    {user ?
                        <>
                    <Nav.Link href={HOMEPAGE_ROUTE}>Home</Nav.Link>
                    <Nav.Link href={CREATE_TASK_ROUTE}>Create Task</Nav.Link>
                    <Nav.Link href={PROFILE_ROUTE}>Profile</Nav.Link>
                        </>
                        :
                        <>
                        <Nav.Link href={HOMEPAGE_ROUTE}>Home</Nav.Link>
                        </>
                    }
                </Nav>
                <Nav>
                    {user ?
                        <Button onClick={() => auth.signOut()}>Logout</Button>
                        :
                        <>
                        <Button onClick={() => handleOnClick(facebookProvider)}>Facebook</Button>
                        <Button onClick={() => handleOnClick(googleProvider)}>Google</Button>
                        </>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}