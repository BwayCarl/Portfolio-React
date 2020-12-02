import React from 'react';
import '../styles/Portfolio.css';
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Portfolio() {
    return (
        <div className="bg-dark text-light">
            <div><h2 className= "title text-center display-5">Portfolio</h2><span className="sr-only">Portfolio Images</span></div>
            <Container>
                <Row>
                    <Col size="md-6">
                        <div className="card bg-dark border-dark">
                            <img src="./assets/images/Food-Drink-App.jpg" className="card-img-top" alt="food-drink-app" />
                            <div className="card-body text-white bg-dark">
                                <h5 className="card-title">What Are We Making Tonight?</h5>
                                <p className="card-text">This team project is an application that randomly provides recipes for four different meals or four different cocktails after choosing a main ingredient.</p>
                                <br /><br />
                                <a href="https://bwaycarl.github.io/Project1-Meal-and-Drink-app/drinksindex.html" rel="noreferrer" target="_blank" className="btn btn-secondary ctr">Visit the live page</a>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="https://github.com/BwayCarl/Project1-Meal-and-Drink-app" rel="noreferrer" target="_blank" className="btn btn-secondary"><i className="fab fa-github btn-icon"></i> Github Repository</a>
                            </div>
                        </div>
                    </Col>

                    <Col size="md-6">
                        <div className="card bg-dark border-dark">
                            <img src="./assets/images/EMFLC.png" className="card-img-top" alt="workday-scheduler" />
                            <div className="card-body text-white bg-dark">
                                <h5 className="card-title">More Football Less COVID</h5>
                                <p className="card-text">This team project leverages numerous technologies, throughout the full stack, to generate a user experience that together data from multiple sources to provide tailored safety measures per NFL team in an attempt to mitigate COVID risk and hopefully allow for people to safely attend NFL games all season.</p>
                                <a href="https://fathomless-escarpment-94264.herokuapp.com/" rel="noreferrer" target="_blank" className="btn btn-secondary">Visit the live page</a>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="https://github.com/BwayCarl/EvenMoreFootballLessCOVID" rel="noreferrer" target="_blank" className="btn btn-secondary"><i className="fab fa-github btn-icon"></i> Github Repository</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div><br/><br/></div>
            <Container>
                <Row>
                    <Col size="md-6">
                        <div className="card bg-dark border-dark">
                            <img src="./assets/images/Eat-Da-Burger.png" className="card-img-top" alt="eat-da-burger-app" />
                            <div className="card-body text-white bg-dark border-dark">
                                <h5 className="card-title border-dark">Eat-Da-Burger</h5>
                                <p className="card-text">A burger logger app using MySQL, Node, Express, Handlebars and a homemade ORM following the MVC design.</p>
                                <br/>
                                    <a href="https://radiant-tor-88185.herokuapp.com/burgers" rel="noreferrer" target="_blank" className="btn btn-secondary">Visit the live page</a>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a href="https://github.com/BwayCarl/burger" rel="noreferrer" target="_blank" className="btn btn-secondary"><i className="fab fa-github btn-icon"></i> Github Repository</a>
                                    </div>
                            </div>
                    </Col>
                            
                        <Col size="md-6">
                            <div className="card bg-dark border-dark">
                            <img src="./assets/images/Workday-Scheduler.jpg" className="card-img-top" alt="workday-scheduler"/>
                                <div className="card-body text-white bg-dark">
                                    <h5 className="card-title">Workday Scheduler</h5>
                                    <p className="card-text">A calendar application that allows the user to save events for each hour of the work day and stores the information in local storage. This app runs in the browser.</p>
                                    <a href="https://bwaycarl.github.io/workday-scheduler/" rel="noreferrer" target="_blank" className="btn btn-secondary">Visit the live page</a>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a href="https://github.com/BwayCarl/workday-scheduler" rel="noreferrer" target="_blank" className="btn btn-secondary"><i className="fab fa-github btn-icon"></i> Github Repository</a>
                                </div>
                            </div>
                        </Col>
                </Row>
            </Container>
            <div><br/><br/></div>
            <Container>
                <Row>
                    <Col size="md-6">
                        <div className="card bg-dark border-dark">
                        <img src="./assets/images/note-taker-app.png" class="card-img-top" alt="note-taker-app" />
                                    <div class="card-body text-white bg-dark border-dark">
                                    <h5 class="card-title border-dark">Note Taker</h5>
                                    <p class="card-text">An application that can be used to write, save, and delete notes using an express backend, saving and retrieving note data from a JSON file.</p>
                                    <a href="https://afternoon-dawn-02847.herokuapp.com/" rel="noreferrer" target="_blank" class="btn btn-secondary">Visit the live page</a>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a href="https://github.com/BwayCarl/Note-Taker" rel="noreferrer" target="_blank" class="btn btn-secondary"><i class="fab fa-github btn-icon"></i> Github Repository</a>
                                </div>
                            </div>
                    </Col>
                            
                        <Col size="md-6">
                            <div className="card bg-dark border-dark">
                            <img src="./assets/images/Weather-Dashboard.png" class="card-img-top" alt="weather-dashboard" />
                                <div class="card-body text-white bg-dark">
                                    <h5 class="card-title">Weather Dashboard</h5>
                                    <p class="card-text">A weather dashboard app using a third party API to return current weather information and a 5-day forecast for searched city.</p>
                                    <br/>
                                    <a href="https://bwaycarl.github.io/weather-dashboard/" rel="noreferrer" target="_blank" class="btn btn-secondary">Visit the live page</a>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a href="https://github.com/BwayCarl/weather-dashboard" rel="noreferrer" target="_blank" class="btn btn-secondary"><i class="fab fa-github btn-icon"></i> Github Repository</a>
                                </div>
                            </div>
                        </Col>
                </Row>
            </Container>
        </div>
        
    );
}

export default Portfolio;