import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light" style={{backgroundColor: '#ffffff'}}>
  <div className="container-fluid expand">
    <a className="navbar-brand" href="#">EXOPLANET</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-Link col-md-5" to="/">
            Welcome
        </Link>
        <div className=" col-md-5">
          <Link className="nav-Link" to="/RegisterPage">
            Sign Up
          </Link>
        </div>
        <div className="col-md-5">
          <Link to="/LoginPage">
            Sign In
          </Link>
        </div>
        <div className="col-md-4">
        <Link className="nav-Link" to="/ListMenu">
            List
        </Link>
        </div>
        <div>
          <Link className="nav-Link" to="/Admin">
            Admin
          </Link>
        </div>
      </div>
    </div>
  </div>
</nav>
    )
}

export default NavBar;
