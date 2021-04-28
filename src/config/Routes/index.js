import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from '../../Components/Pages/Login';
import Dashboard from '../../Components/Pages/Dashboard';
import About from '../../Components/Pages/About';
import Register from '../../Components/Pages/Register';

const Routes = () => {
    return (
        <Router>
            <Switch>
            <Route exact path="/">
                <Login title="Welcome"/>
            </Route>
            <Route exact path="/Dashboard">
                <Dashboard />
            </Route>
            <Route exact path="/About">
                <About />
            </Route>
            <Route exact path="/Register">
                <Register />
            </Route>
        </Switch>
        </Router>
    )
};

export default Routes;
