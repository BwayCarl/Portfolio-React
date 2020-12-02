import React from 'react';
import '../styles/Home.css';
import { NavLink } from 'react-router-dom'


function Home() {

    return (
        <div className="jumbotron">
                <h1 className="display-4">Hi, I'm Carlos.</h1>
                <h2 className="blurb">I'm a Full-Stack Web Developer student at Rutgers.</h2>
                <br></br>
                <NavLink className="btn btn-outline-secondary btn-lg text-center" to="/about">Learn more about me</NavLink>
        </div>
    )
};

export default Home;