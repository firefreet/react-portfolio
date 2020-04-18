import React from 'react';
import Links from '../Links';
import './style.css';

function Nav() {
    return (
        <div className="row border-bottom bg-white">
            <div className="container p-0 mx-0 mx-sm-auto mx-md-3 mx-lg-auto">
                <nav className="navbar navbar-expand navbar-light d-flex flex-wrap flex-md-nowrap p-0 pr-sm-0">
                    <span className="navbar-brand text-center text-white w-100 pt-4 px-4 pb-3 m-0">
                        <h2>Jeremy Marotta</h2>
                    </span>
                    <div className="w-100"></div>
                    <Links />
                </nav>
            </div>
        </div>
    )
}
export default Nav;