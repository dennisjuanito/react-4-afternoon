import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import ClassList from "./components/ClassList/ClassList.js";
import Student from "./components/Student/Student.js";


export default (
    //react-router dom automatically pass down a props, which is an object called 'match' which has several properties. One of the is called
    // params. This properties can be used to get the value of the route parameters. Example: this.props.match.params.YOUR_PROPERTY_NAME_IN_URL_LINK
    <Switch>
        <Route component={ Home } exact path="/" />
        <Route component={ About } path="/about" /> 
        <Route component={ ClassList } path="/classlist/:class" />
        <Route component={ Student } path="/student/:id" />

    </Switch>
)







