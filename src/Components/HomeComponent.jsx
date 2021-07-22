import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel"
import image1 from "./../images/carousel1.jpg"
import image2 from "./../images/carousel2.jpg"
import image3 from "./../images/carousel3.jpg"
import image4 from "./../images/carousel6.jpg"
class HomeComponent extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <>
                <div className="container">
                    <Carousel controls={false} fade={true} interval={1500} style={{marginTop:"20px"}}>
                        <Carousel.Item key={Math.random(100)}>
                            <img
                                className="d-block w-100"
                                src={image1}
                                alt="First slide"
                                style={{ height: "450px" } }
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
                    <h1>Manish</h1>
                </div>

            </>
        )
    }
}
export default HomeComponent;