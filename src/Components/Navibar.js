import React from 'react';
import {Navbar, Nav} from "react-bootstrap";

export default function NaviBar() {
    return(
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>Home</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
    )}