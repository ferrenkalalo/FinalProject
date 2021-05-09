import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid expand">
    <a className="navbar-brand" href="#">EXOPLANET</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-Link col-md-3" to="List">
            LIST
        </Link>
        <div className="col-md-2">
          <Link to="/Request">
            REQUEST
          </Link>
        </div>
        <div className="col-md-3 offset-md-3">
        <Link className="nav-Link" to="/AboutUs">
            ABOUT_US
        </Link>
        </div>
        <div className="col-md-4 offset-md-4">
          <Link className="nav-Link text-danger" to="/">
            EXIT
          </Link>
        </div>
      </div>
    </div>
  </div>
</nav>
    )
}

export default NavBar;
