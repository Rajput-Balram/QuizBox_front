import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel"
import image1 from "./../images/carousel1.jpg"
import image2 from "./../images/carousel2.jpg"
import image3 from "./../images/carousel3.jpg"
import image4 from "./../images/carousel4.png"
import cLogo from "./../images/c.svg"
import cppLogo from "./../images/c++.svg"
import javaLogo from "./../images/java.png"
import pythonLogo from "./../images/python.png"
import { Button } from "reactstrap"
import { Link } from "react-router-dom";
class HomeComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className="container">
                    <Carousel controls={false} fade={true} interval={1500} style={{ marginTop: "20px" }}>
                        <Carousel.Item key={Math.random(100)}>
                            <img
                                className="d-block w-100"
                                src={image1}
                                alt="First slide"
                                style={{ height: "450px" }}
                            />
                        </Carousel.Item>
                        <Carousel.Item key={Math.random(100)}>
                            <img
                                className="d-block w-100"
                                src={image2}
                                alt="second slide"
                                style={{ height: "450px" }}
                            />
                        </Carousel.Item>
                        <Carousel.Item key={Math.random(100)}>
                            <img
                                className="d-block w-100"
                                src={image3}
                                alt="third slide"
                                style={{ height: "450px" }}
                            />
                        </Carousel.Item>
                        <Carousel.Item key={Math.random(100)}>
                            <img
                                className="d-block w-100"
                                src={image4}
                                alt="fourth slide"
                                style={{ height: "450px" }}
                            />
                        </Carousel.Item>
                    </Carousel>
                    <hr />
                    <div style={{ marginTop: "10px" }}>
                        <center><h1>Take Your Test</h1></center>
                        <div style={{ display: "flex" }}>
                            <div className="tests">
                                <img src={cLogo} alt="c" width="85%" height="85%" className="logo"/>
                                <div className="quizButton">
                                <Link to="selected-quiz/c"><Button  color="success " >Start Quiz</Button></Link>
                                </div>
                            </div>
                            <div className="tests">
                                <img src={cppLogo} alt="c" width="85%" height="85%" className="logo"/>
                                <div className="quizButton">
                                <Link to="selected-quiz/cpp"><Button  color="success " >Start Quiz</Button></Link>
                                </div>
                            </div>
                            <div className="tests">
                                <img src={javaLogo} alt="c" width="80%" height="80%" className="logo"/>
                                <div className="quizButton">
                                <Link to="selected-quiz/java"><Button  color="success " >Start Quiz</Button></Link>
                                </div>
                            </div>
                            <div className="tests">
                                <img src={pythonLogo} alt="c" width="80%" height="80%" className="logo"/>
                                <div className="quizButton">
                                <Link to="selected-quiz/python"><Button  color="success " >Start Quiz</Button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default HomeComponent;