import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light" style={{backgroundColor: '#e3f2fd'}}>
  <div className="container-fluid expand">
    <a className="navbar-brand" href="#">- WebPro -</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-Link col-md-4" to="/">
            Login
        </Link>
         <div className=" col-md-6">
          <Link className="nav-Link" to="/Dashboard">
            Dashboard
          </Link>
        </div>
        <div className="col-md-6">
          <Link className="nav-Link" to="/Register">
            Register
          </Link>
        </div>
        {/* <div className="col-md-5">
        <Link className="nav-Link" to="/About">
            About
        </Link>
        </div> */}
        <div>
          <Link className="nav-Link" to="/About">
          About
          </Link>
        </div>

        {/* <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Pricing</a>
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
      </div>
    </div>
  </div>
</nav>
    )
}

export default NavBar;
