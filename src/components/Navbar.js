import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <NavLink className="navbar-brand" to="/">Carlos Martinez</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse float-right" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/"
                                    ? "nav-link active"
                                    : "nav-link"
                            }>Home</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                            to="/portfolio"
                            className={
                                window.location.pathname === "/portfolio" || window.location.pathname === "/portfolio"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >Portfolio</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                            to="/about"
                            className={
                                window.location.pathname === "/about" || window.location.pathname === "/about"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            About
            </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                            to="/contact"
                            className={
                                window.location.pathname === "/contact" || window.location.pathname === "/contact"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Contact
            </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                            to="/resume"
                            className={
                                window.location.pathname === "/resume" || window.location.pathname === "/resume"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Resume
            </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;