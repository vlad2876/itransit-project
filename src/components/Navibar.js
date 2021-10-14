import React from 'react';
import {Navbar, Nav, Button} from "react-bootstrap";
import {ADMIN_ROUTE, CREATE_TASK_ROUTE, HOMEPAGE_ROUTE, PROFILE_ROUTE} from "../utils/consts";
import {facebookProvider, googleProvider} from "../config/authMethods";
import socialMediaAuth from "../service/auth";

export default function NaviBar() {
    const handleOnClick = async (provider) => {
        const user = await socialMediaAuth(provider)
        console.log(user)
    };
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
                    <Button onClick={()=> handleOnClick(facebookProvider)}>Facebook</Button>
                    <Button onClick={()=> handleOnClick(googleProvider)}>Google</Button>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}