import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
    return(
        <div className="row border-bottom bg-white">
        <div className="container p-0 mx-0 mx-sm-auto mx-md-3 mx-lg-auto">
            <nav className="navbar navbar-expand navbar-light d-flex flex-wrap flex-md-nowrap p-0 pr-sm-0">
                <span className="navbar-brand text-center text-white w-100 pt-4 px-4 pb-3 m-0">
                    <h2>Jeremy Marotta</h2>
                </span>
                <div className="w-100"></div>
                <button className="navbar-toggler mx-auto" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav p-0 ml-auto mx-auto ml-md-auto">
                        <Link className={window.location.pathname === "/index" ? "nav-item nav-link active" : "nav-item nav-link"} to="/index">About<span className="sr-only">(current)</span></Link>
                        <p className="disappear p-auto m-auto"> | </p>
                        <Link className={window.location.pathname === "/portfolio" ? "nav-item nav-link active" : "nav-item nav-link"} to="/portfolio">Portfolio</Link>
                        <p className="disappear p-auto m-auto"> | </p>
                        <Link className={window.location.pathname === "/contact" ? "nav-item nav-link active" : "nav-item nav-link"} to="/contact">Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    )
}
export default Nav;