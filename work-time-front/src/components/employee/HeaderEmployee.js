import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class HeaderEmployee extends React.Component{
    render(){
        return (
            <>
                <Navbar sticky="top" bg="dark" expand="lg" variant="dark">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/employee">Главная</Nav.Link>
                                <Nav.Link href="/employee/executing">Выполнение</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}

