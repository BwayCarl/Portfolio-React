import React from 'react';
import '../styles/Resume.css';
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Resume() {
    return (
        <div className="bg-dark text-light resume">
            <Container>
                <Row>
                    {/* <Col size="sm-1"></Col> */}
                    <Col size="sm-4" id="logo">
                        <h1 className="resume-name">Carlos Martinez</h1>
                        <div><img id="profile-pic" className="profile-pic" src={process.env.PUBLIC_URL + "/assets/images/CM-ProfilePic.jpg"} alt="Carlos profile pic" /></div>
                        <br />
                        <h5 className="text-center">Full Stack Developer</h5>
                        <br />
                        <div class="resume-links">
                            <div><i className="fas resume-icon fa-map-marker-alt"></i> 111 Sherman Place</div>
                            <div>South Orange, NJ 07079</div>
                            <br />
                            <div><i className="fas resume-icon fa-envelope-square"></i><a href="mailto:bwaycarl@gmail.com" rel="noreferrer" target="_blank"> bwaycarl@gmail.com</a></div>

                            <div><i className="fas resume-icon fa-mobile-alt"></i> 917-848-8949</div>

                            <div><i className="fab resume-icon fa-twitter"></i><a href="https://twitter.com/BwayDev" rel="noreferrer" target="_blank"> @BwayDev</a></div>

                            <div><i className="fab resume-icon fa-github"></i><a href="https://github.com/BwayCarl" rel="noreferrer" target="_blank"> BwayCarl</a></div>

                            <div><i className="fab resume-icon fa-instagram"></i><a href="https://www.instagram.com/broadwaycarl/" rel="noreferrer" target="_blank"> BroadwayCarl</a></div>
                            <br /><br /><br />

                            {/* Skills with Language Icons */}
                            <h5>Skills</h5>
                            <div><i className="fab react-logo resume-icon fa-react"></i> React</div>
                            <div><img src={process.env.PUBLIC_URL + "/assets/images/mongodb-logo.png"} alt="mongoDB-logo" className="mongoDB-logo"/> mongoDB</div>
                            <div><img src={process.env.PUBLIC_URL + "/assets/images/logo-mysql-26341.png"} alt="mysql-logo" className="mysql-logo"/> MySQL</div>
                            <div><i className="fab n-js-logo resume-icon fa-node"></i> Node.js</div>
                            <div><i className="fab js-logo resume-icon fa-js-square"></i> JavaScript</div>
                            <div><i className="fab html-logo resume-icon fa-html5"></i> HTML5</div>
                            <div><i className="fab css-logo resume-icon fa-css3"></i> CSS3</div>
                            <br /><br /><br />
                            
                            {/* PDF Button */}
                            <div><a href={process.env.PUBLIC_URL + "/assets/Carlos_Martinez_Resume.pdf"} rel="noreferrer" target="_blank" type="button" className="btn btn-primary"><i className="fas fa-file-pdf"></i> Download PDF Version</a></div>
                        </div>
                    </Col>

                    <Col size="sm-8">
                        <div id="summary" className="summary">
                            {/* Summary */}
                        <h3>Summary</h3>
                                <ol className="list-unstyled">
                                    <li>After 25 successful years in the entertainment industry as a Broadway Local One stagehand specializing in electrics, the sudden coronavirus pandemic has steered me down a different path. I am taking the opportunity to expand my horizons and concentrate on learning the skills needed to jump start a second life in the world of web development.</li><br/>
                                    <li>Having a strong work ethic and being in charge of large crews in conjunction with delegating responsibilities have honed my leadership skills and ingrained in me the importance of teamwork and appreciation of the vast skills needed to form a functioning team unit.</li>
                                </ol>
                        </div>
                        
                            <hr/>
                            {/* EXPERIENCE */}
                            <h3 className="subheaders">Experience</h3>
                            
                            <div className='position'>
                                <h4>The Shubert Organization <small className='citystate'>New York, NY</small></h4>
                                <strong>House Electrician, Booth Theatre <span className='dates pull-right'> - September, 2018 - PRESENT</span></strong>
                                <div><strong>House Electrician, Belasco Theatre <span className='dates pull-right'> - August, 2013 - September, 2018</span></strong></div>
                                <ul className="circle">
                                    <br/>
                                    <li>Responsible for all areas of lighting and electrical power for the entire theater, as well as the power needs for the lighting design, sound design and automation elements of the scenic design of each production.</li>
                                    <li>In charge of hiring the Electrics Department crew that loads in each attraction (numbers range from 12-30 crew members depending on the production) and the permanent crew that runs and maintains the show during its life.</li>
                                    <li>Implement initiatives for upgrading the facility's electrical systems to ensure up to date technology and safely replace outdated systems.</li>
                                    <li>Submit monthly maintenance reports with explanations of completed tasks and goals, including recommendations for future projects.</li>
                                </ul>
                            </div>
                            <br/>
                            <div className='position'>
                                <h4>Broadway Electrician / Production Electrician <small className='citystate'>New York, NY</small></h4>
                                <strong><span className='dates pull-right'>1998 - 2013</span></strong>
                                <ul className="circle">
                                    <br/>
                                    <li>Electrician for over 30 Broadway productions including Thoroughly Modern Millie, The Lion King, Aladdin, Farinelli & The King, Hedwig & The Angry Inch, Mary Poppins, The Glass Menagerie, Who's Afraid of Virginia Woolf?, The River and Freestyle Love Supreme.</li>
                                    <li>Member of Theatrical Protective Union, Local No. One I.A.T.S.E since 2004.</li>
                                    
                                </ul>
                            </div>
                            <hr/>
                            {/* EDUCATION */}
                            <h3 className="subheaders">Education</h3>
                            
                            <div className='position'>
                                <h4>Rutgers University <small className='citystate'>New Brunswick, NJ</small></h4>
                                <strong>Web Coding Bootcamp - Full Stack Flex <span className='dates pull-right'>- June, 2020 - December, 2020</span></strong>
                                <ul className="circle">
                                    <li>Certificate of Completion • Center for Continuing Professional Development </li>
                                    <li>Curriculum covering a vast array of computer programming such as HTML5, CSS3, JavaScript, jQuery, Node.js, Responsive Design, Heroku, Git, User Authentication, React.js, MySQL, and MongoDB.</li>
                                </ul>
                            </div>
                            <div className='position'>
                                <h4>CUNY Queens College, Aaron Copland School of Music <small className='citystate'>Flushing, NY</small></h4>
                                <strong>Music Perfomance Major - Clarinet <span className='dates pull-right'>- September, 1984 - June, 1988</span></strong>
                                
                            </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Resume;