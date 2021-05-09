import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Request from '../../Request';
import LoginPage from '../../LoginPage';
import Menu from '../../Menu';
import RegisterPage from '../../RegisterPage';
import WelcomePage from '../../WelcomePage';
import List from '../../List';
import AboutUs from '../../AboutUs';

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <WelcomePage/>
                    </Route>
                    <Route path="/LoginPage">
                        <LoginPage/>
                    </Route>
                    <Route path="/RegisterPage">
                        <RegisterPage/>
                    </Route>
                    <Route path="/List">
                        <List/>
                    </Route>
                    <Route path="/Request">
                        <Request/>
                    </Route>
                    <Route path="/Menu">
                        <Menu/>
                    </Route>
                    <Route path="/AboutUs">
                        <AboutUs/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Routes;
