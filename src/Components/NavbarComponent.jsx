import React, { Component } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { Button } from "reactstrap"
import { Link, Redirect } from "react-router-dom";
import allFunctions from "./Services/Functions.js"
class NavbarComponent extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout(){
        sessionStorage.removeItem("user");
        window.location.href="http://localhost:3000/login"
    }
    handleAdminLogout(){
        sessionStorage.removeItem("admin")
        window.location.href="http://localhost:3000/login"
    }
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Container >
                        <Link to="/home" className="navbar-brand">QuizBox</Link>
                        <Nav className="me-auto">
                            <NavDropdown title="Category" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/selected-quiz/c">C Language Quiz</NavDropdown.Item>
                                <NavDropdown.Item href="/selected-quiz/cpp">C++ Language Quiz</NavDropdown.Item>
                                <NavDropdown.Item href="/selected-quiz/java">Java Language Quiz</NavDropdown.Item>
                                <NavDropdown.Item href="/selected-quiz/python">Python Language Quiz</NavDropdown.Item>
                            </NavDropdown>
                            <Link className="nav-link" to="/aboutus">About Us</Link>
                        </Nav>
                        {!allFunctions.isUserLoggedIn() && !allFunctions.isAdminLoggedIn() && <Link to="/login"><Button color="success">Login</Button></Link>}
                        {/* {allFunctions.isAdminLoggedIn() && <Link to="/admin"><Button color="success">Admin Panel</Button></Link>} */}
                    </Container>
                    {allFunctions.isUserLoggedIn() &&
                        <>
                            <Nav className="me-auto ">
                                <NavDropdown className="me-auto " 
                                title={(JSON.parse(sessionStorage.getItem("user")).name)+"'s Account"} 
                                id="navbarScrollingDropdown"
                                style={{right:"50px"}}
                                >
                                    <NavDropdown.Item href="/check-score">Quiz History</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={this.handleLogout} style={{color:"red"}}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </>
                    }

                    {/* admin */}

                    {allFunctions.isAdminLoggedIn() &&
                        <>
                            <Nav className="me-auto ">
                                <NavDropdown className="me-auto " 
                                title={(JSON.parse(sessionStorage.getItem("admin")).email)+" Admin"} 
                                id="navbarScrollingDropdown"
                                style={{right:"50px"}}
                                >
                                    <NavDropdown.Item href="/check-score-all">LeaderBoard</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/get-allUser">User's</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={this.handleAdminLogout} style={{color:"red"}}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </>
                    }
                </Navbar>
            </>
        )
    }
}
export default NavbarComponent