import React from 'react';
import '../styles/Home.css';
import { NavLink } from 'react-router-dom'
// import Jumbotron from './components/Jumbotron.js';
function Home() {
    return (
        <div className="text-center bg-dark">
            {/* <Jumbotron backgroundImage="../images/new-york-4340541_1920.jpg"> */}
                <h1 className="display-4">Hi, I'm Carlos.</h1>
                <h2 className="">I'm a Full-Stack Web Developer student at Rutgers.</h2>
                <br></br>
                <NavLink className="btn btn-outline-secondary btn-lg text-center" to="/about">Learn more about me</NavLink>
            {/* </Jumbotron> */}
        </div>
    )
};

export default Home;