import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <Link className="navbar-brand" to="/">Carlos Martinez</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse float-right" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/"
                                    ? "nav-link active"
                                    : "nav-link"
                            }>Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            to="/portfolio"
                            className={
                                window.location.pathname === "/portfolio" || window.location.pathname === "/portfolio"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >Portfolio</Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            to="/about"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/about"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            About
            </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            to="/contact"
                            className={
                                window.location.pathname === "/contact" || window.location.pathname === "/contact"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Contact
            </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            to="/resume"
                            className={
                                window.location.pathname === "/resume" || window.location.pathname === "/resume"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Resume
            </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;