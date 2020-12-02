import React from 'react';
import '../styles/About.css';
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About () {
    return (
    <div className="bg-dark text-light page"id="page-content">
       <Container className="bio"> 
            <Row>
                <Col size="md-4">
                    <figure>
                        <img id="bio-pic" className="img-fluid" src="./assets/images/CM-bio-pic.jpg" alt="Carlos bio pic" />
                    </figure>
                </Col>
            
         
                <Col size="md-8" className= "about">
                    <h1>A little bit about me...</h1>
                    <br />
                    <p>My name is Carlos Martinez and I'm a native New Yorker currently living in South Orange, New Jersey.</p> 
                    <p>After 25 successful years in the entertainment industry as a Broadway Local One stagehand specializing in electrics, the sudden cononavirus pandemic has steered me down a different path. While my career is on indefinite hold, I am taking the opportunity to expand my horizons and concentrate on learning the skills needed to jump start a second life in the world of web development.</p>
                    <p>I've been the production electrician for Tony Award-winning lighting designs, so I know what it's like working in collaboration with others to bring a vision to life, which is why I am interested in web design. I like to put things together and make them work with the anticipation of a beautiful outcome.  </p>
                    <p>Fun Facts: I love jazz, I'm teaching myself how to play guitar, I've been happily married for 13 years and counting, and I'm an avid New York Mets fan which gives me the opportunity to teach my two daughters (ages 10 and 7) lessons in humility. </p>
                </Col>
             </Row>
        </Container> 
    </div> 

    );
}

export default About;