import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";
import HomeComponent from "./HomeComponent";
import AboutUsComponent from "./AboutUsComponent";
class RoutingComponent extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <Router>
                <NavbarComponent></NavbarComponent>
                <Switch>
                    <Route path="/home" exact component={HomeComponent} />
                    <Route path="/aboutus" exact component={AboutUsComponent} />
                    <Route path="" exact component={HomeComponent} />
                </Switch>
                <FooterComponent></FooterComponent>
            </Router>
        )
    }
}
export default RoutingComponent;