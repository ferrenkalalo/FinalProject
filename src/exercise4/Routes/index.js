import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from '../About';
import AddUser from '../AddUser';
import Dashboard from '../Dashboard';
import Login from '../Login';
import Register from '../Register';

const Routes = () => {
    return (
       <Router>
           <Switch>
               <Route exact path="/">
                    <Login/>
               </Route>
               <Route exact path="/Register">
                   <Register/>
               </Route>
               <Route exact path="/Dashboard">
                   <Dashboard/>
               </Route>
               <Route exact path="/About">
                   <About/>
               </Route>
               <Route exact path="/AddUser">
                   <AddUser />
               </Route>
           </Switch>
       </Router>
    )
}

export default Routes;
