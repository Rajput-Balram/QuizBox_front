import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";
import HomeComponent from "./HomeComponent";
import AboutUsComponent from "./AboutUsComponent";
import QuizComponent from "./QuizComponent";
import LoginComponent from "./LoginComponent";
import SignupComponent from "./SignupComponent";
import AuthenticatedRoute from "./Services/AuthenticatedRoute";
import AdminRoute from "./Services/AdminRoute";
import ScoreTableComponent from "./ScoreTableComponent";
import AdminComponent from "./AdminComponent";
import AllScoreTableComponent from "./AllScoreTableComponent";
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
                    <AuthenticatedRoute Route path="/selected-quiz/:quiz" exact component={QuizComponent} />
                    <Route path="/login" exact component={LoginComponent} />
                    <AdminRoute Route path="/admin" exact component={AdminComponent} />
                    <Route path="/signup" exact component={SignupComponent} />
                    <Route path="/check-score" exact component={ScoreTableComponent} />
                    <Route path="/check-score-all" exact component={AllScoreTableComponent} />
                    <Route path="" exact component={HomeComponent} />
                </Switch>
                <FooterComponent></FooterComponent>
            </Router>
        )
    }
}
export default RoutingComponent;