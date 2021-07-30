import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Input, FormGroup, Label, Button, Form } from "reactstrap"
import allFunctions from "./Services/Functions.js"
import {Alert} from "react-bootstrap"

export default class SignupComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            mobile:'',
            password:'',
            cpassword:'',
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeCPassword = this.handleChangeCPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeName(event){
        this.setState({name:event.target.value})
    }
    handleChangeEmail(event){
        this.setState({email:event.target.value})
    }
    handleChangePhone(event){
        this.setState({mobile:event.target.value})
    }
    handleChangePassword(event){
        this.setState({password:event.target.value})
    }
    handleChangeCPassword(event){
        this.setState({cpassword:event.target.value})
    }
    handleSubmit(event){
        event.preventDefault();
        const userData = {
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
            password:this.state.password,
            error:'',
        };
        allFunctions.addUser(userData).then(
            (response)=>{
                console.log(response);
                if(!response.data){
                    this.setState({error:"Account already exist with this email!! \n Please login"})
                    
                    return;  
                }
                this.props.history.push("/login")
            },
            (error)=>{
                console.log(console.error())
            }
        )
    }
    render() {
        return (
            <div className="container ">
                <Form onSubmit={this.handleSubmit}>
                    <h1>SignUp Form</h1>
                    {this.state.error && <Alert  variant="danger">
                    {this.state.error}
                  </Alert>}
                    <FormGroup>
                        <Label for="name" Col="sm-6">Full Name</Label>
                        <Input
                            Col="sm-6"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter Here..."
                            onChange={this.handleChangeName}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="phone" Col="sm-6">Phone Number</Label>
                        <Input
                            Col="sm-6"
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Enter Here..."
                            onChange={this.handleChangePhone}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email" Col="sm-6">Email</Label>
                        <Input
                            Col="sm-6"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter Here..."
                            onChange={this.handleChangeEmail}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter Here..."
                            onChange={this.handleChangePassword}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="cpassword">Confirm Password</Label>
                        <Input
                            type="password"
                            name="cpassword"
                            id="cpassword"
                            placeholder="Enter Here..."
                            onChange={this.handleChangeCPassword}
                            required
                        />
                    </FormGroup>
                    <Button type="submit" color="success" className="mt-2">
                        SignUp
                    </Button>
                    <br></br>
                    <br></br>
                    <p>
                        Already a member?<Link to="/login"> Login Here</Link>
                    </p>
                </Form>
            </div >
        );
    }
}
