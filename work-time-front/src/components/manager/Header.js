import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class Header extends React.Component{
    render(){
        return (
            <>
                <Navbar sticky="top" bg="dark" expand="lg" variant="dark">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/manager">Главная</Nav.Link>
                                <Nav.Link as={Link} to="/manager/requests">Запросы</Nav.Link>
                                <Nav.Link href="/manager/employees-list">Сотрудник</Nav.Link>
                                <Nav.Link href="/manager/managers-list">Менеджер</Nav.Link>
                                <Nav.Link href="/manager/durations">Учет рабочего времени</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}

