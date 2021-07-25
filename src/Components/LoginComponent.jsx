import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Input, FormGroup, Label, Button, Form, FormText } from "reactstrap"
import allFunctions from "./Services/Functions.js"
import {Alert} from "react-bootstrap"
class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleChangeEmail(event){
        this.setState({email:event.target.value})
    }
    handleChangePassword(event){
        this.setState({password:event.target.value})
    }
    handleLogin(event){
        event.preventDefault();
        const userData = {
            email:this.state.email,
            password:this.state.password,
            error:'',
        };
        // const error='';
        // if(this.state.email===''){
        //     error+='Email is missing';
        // }
        // if(this.state.password===''){
        //     error+='\nPassword is missing';
        // }
        // if()
        allFunctions.login(userData).then(
            (response)=>{
                if(!response.data){
                    this.setState({error:"Invalid Credentials!!"})
                    return;
                }
                sessionStorage.setItem("user",JSON.stringify(response.data));
                window.location.href="http://localhost:3000/home";
            },
            (error)=>{
                console.log(console.error())
            }
        )
    }
    render() {
        return (
            <div className="container ">

                <Form onSubmit={this.handleLogin}>
                    <h1>Login Form</h1>
                    {this.state.error && <Alert  variant="danger">
                    {this.state.error}
                  </Alert>}
                    <FormGroup>
                        <Label for="exampleEmail" Col="sm-6">Email</Label>
                        <Input
                            Col="sm-6"
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="Email"
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
                            placeholder="Password"
                            onChange={this.handleChangePassword}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="checkbox"
                            name="isAdmin"
                            id="isAdmin"
                            placeholder="Password"
                            style={{ marginLeft: "2px" }}
                        />
                        <Label for="isExpertLogin" style={{ marginLeft: "17px" }}>
                            Are you Admin?
                        </Label>
                    </FormGroup>
                    <Button type="submit" color="success" className="m-2">
                        Login
                    </Button>
                    <p>
                        Not a member?<Link to="/signup"> Register Here</Link>
                    </p>
                </Form>
            </div >
        );
    }
}
export default LoginComponent;