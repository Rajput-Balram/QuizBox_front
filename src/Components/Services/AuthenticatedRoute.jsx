import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import allfunctions from "./../Services/Functions"

export default class AuthenticatedRoute extends Component {
    render() {
        if (allfunctions.isUserLoggedIn()) {
          return <Route {...this.props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }
}