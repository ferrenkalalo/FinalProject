import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Admin from '../../Admin';
import ListMenu from '../../ListMenu';
import LoginPage from '../../LoginPage';
import RegisterPage from '../../RegisterPage';
import WelcomePage from '../../WelcomePage';

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
                    <Route path="/ListMenu">
                        <ListMenu/>
                    </Route>
                    <Route path="/Admin">
                        <Admin/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Routes;
