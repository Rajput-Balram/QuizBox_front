import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import allfunctions from "./../Services/Functions"

export default class AdminRoute extends Component {
    render() {
        if (allfunctions.isAdminLoggedIn()) {
          return <Route {...this.props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }
}
