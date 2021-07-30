import React, { Component } from "react";
import { Input, Label, Button, Form, FormGroup, Col, Row } from "reactstrap";
import allfunctions from "./Services/Functions"
export default class AdminComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "",
            question: "",
            optionA: "",
            optionB: "",
            optionC: "",
            optionD: "",
            answer: "",
            
        };
        this.handleAddQuestion = this.handleAddQuestion.bind(this);
    }
    handleAddQuestion(e) {
        e.preventDefault();
        console.log(e.target);
        const data = {
            category: this.state.category,
            qtitle: this.state.question,
            optionA: this.state.optionA,
            optionB: this.state.optionB,
            optionC: this.state.optionC,
            optionD: this.state.optionD,
            answer: this.state.answer,
            choice: null,
        };
        console.log(data);
        allfunctions.addQuestion(data).then(
            (reponse) => {
                console.log(reponse);
            },
            (error) => {
                console.log(error);
            }
        );
    }
    render() {
        return (
            <div className="container">
                <Form onSubmit={this.handleAddQuestion} className="admin">
                    <h4><strong>Add Question here!!</strong></h4>
                    <hr />
                    <FormGroup row>
                        <Label for="category" sm={4}>
                            Enter Category
                        </Label>
                        <Col sm={8}>
                            <Input
                                type="text"
                                name="category"
                                id="category"
                                placeholder="enter java, c, cpp or python only"
                                style ={{margin:"4px"}}
                                onChange={(e) => {
                                    this.setState({ category: e.target.value });
                                }}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="question" sm={4}>
                            Enter Question
                        </Label>
                        <Col sm={8}>
                            <Input
                                type="textarea"
                                name="question"
                                id="question"
                                placeholder="Enter Here..."
                                style ={{margin:"4px"}}
                                onChange={(e) => {
                                    this.setState({ question: e.target.value });
                                }}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="optionA" sm={4}>
                            Option A
                        </Label>
                        <Col sm={8}>
                            <Input
                                type="text"
                                name="optionA"
                                id="optionA"
                                placeholder="Enter Here..."
                                style ={{margin:"4px"}}
                                onChange={(e) => {
                                    this.setState({ optionA: e.target.value });
                                }}
                                className="options"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="optionB" sm={4}>
                            Option B
                        </Label>
                        <Col sm={8}>
                            <Input
                                type="text"
                                name="optionB"
                                id="optionB"
                                placeholder="Enter Here..."
                                style ={{margin:"4px"}}
                                onChange={(e) => {
                                    this.setState({ optionB: e.target.value });
                                }}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="optionC" sm={4}>
                            Option C
                        </Label>
                        <Col sm={8}>
                            <Input
                                type="text"
                                name="optionC"
                                id="optionC"
                                placeholder="Enter Here..."
                                style ={{margin:"4px"}}
                                onChange={(e) => {
                                    this.setState({ optionC: e.target.value });
                                }}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="optionD" sm={4}>
                            Option D
                        </Label>
                        <Col sm={8}>
                            <Input
                                type="text"
                                name="optionD"
                                id="optionD"
                                placeholder="Enter Here..."
                                style ={{margin:"4px"}}
                                onChange={(e) => {
                                    this.setState({ optionD: e.target.value });
                                }}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="answer" sm={4}>
                            Answer
                        </Label>
                        <Col sm={8}>
                            <Input
                                type="text"
                                name="answer"
                                id="answer"
                                placeholder="Enter Here..."
                                style ={{margin:"4px"}}
                                onChange={(e) => {
                                    this.setState({ answer: e.target.value });
                                }}
                            />
                        </Col>
                    </FormGroup>
                    <Button type="submit" color="success" sm={3}>
                        Add Question
                    </Button>

                </Form>
            </div>
        );
    }
}