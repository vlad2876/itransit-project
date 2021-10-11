import React from 'react';
import {Navbar, Nav, Button} from "react-bootstrap";
import {ADMIN_ROUTE, CREATE_TASK_ROUTE, HOMEPAGE_ROUTE, PROFILE_ROUTE} from "../utils/consts";


export default function NaviBar() {
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
                    <Button variant="primary" className="mr-2">VK</Button>
                    <Button variant="primary">Facebook</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}