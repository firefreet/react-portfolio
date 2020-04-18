import React from 'react';
import { Link } from 'react-router-dom';

function Links() {
    return (
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav p-0 ml-auto mx-auto ml-md-auto">
                <Link className={window.location.pathname === "/" ? "nav-item nav-link active" : "nav-item nav-link"} to="/">About<span className="sr-only">(current)</span></Link>
                <p className="disappear p-auto m-auto"> | </p>
                <Link className={window.location.pathname === "/portfolio" ? "nav-item nav-link active" : "nav-item nav-link"} to="/portfolio">Portfolio</Link>
                <p className="disappear p-auto m-auto"> | </p>
                <Link className={window.location.pathname === "/contact" ? "nav-item nav-link active" : "nav-item nav-link"} to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Links;