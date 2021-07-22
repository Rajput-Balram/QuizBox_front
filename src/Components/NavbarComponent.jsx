import React, { Component } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import {Button} from "reactstrap"
import { Link } from "react-router-dom";
class NavbarComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link to="/home" className="navbar-brand">QuizBox</Link>
                    <Nav className="me-auto">
                        <NavDropdown title="Category" id="navbarScrollingDropdown">
                        {/* <Link className="nav-link"></Link> */}
                            <Link to="/cquiz" className="navdropdown-item">C Language Quiz</Link>
                            <NavDropdown.Item href="#action4">C++ Language Quiz</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Java Language Quiz</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Python Language Quiz</NavDropdown.Item>
                        </NavDropdown>
                        <Link className="nav-link" to="/aboutus">About Us</Link>

                    </Nav>
                    <Button color="success">Login</Button>
                </Container>
            </Navbar>
        )
    }
}
export default NavbarComponent