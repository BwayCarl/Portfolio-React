import React from 'react';
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Wrapper from '../components/Wrapper';
import '../styles/Contact.css';
// import emailjs from 'emailjs-com';

function Contact() {
    return (
        <div className="bg-dark text-light">
            <Wrapper className="bg-dark text-light">
                {/* Header */}
                <Container className="contact-header bg-dark text-light">
                    <Row className="bg-dark text-light">
                        <Col size="md-12" className="text-center bg-dark text-light">
                            <h2 className="text-center contact">Want to reach me?</h2>
                            <br />
                            <h5 className="text-center">Call to chat  <i class="fas fa-phone-alt"></i>  917-848-8949</h5>
                            <br />
                            <h6 className="text-center">...or leave your message below and I will get back to you as soon as possible.</h6>
                            <br />
                        </Col>
                    </Row>
                </Container>

                {/* Contact Form */}
                <Container className="form">
                    <Row size="md-12 text-center" className="bg-dark text-light">
                        <Col size="md-1">
                        </Col>
                        <Col size="md-10">
                            <form id="contact-form" method="POST" action="https://formspree.io/f/xrgoqaoq">
                                <div className="controls">

                                    <Row className="text-center">
                                        <Col size="md-6">
                                            <div class="form-group">
                                                {/* First Name */}
                                                <label for="form_name">First Name *</label>
                                                <input id="form_name" type="text" name="name" className="form-control" placeholder="John" required="required" data-error="Firstname is required." />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </Col>

                                        <Col size="md-6">
                                            <div className="form-group">
                                                {/* Last Name */}
                                                <label for="form_lastname">Last Name *</label>
                                                <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Doe" required="required" data-error="Lastname is required." />
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col size="md-6">
                                            <div className="form-group">
                                                {/* Email */}
                                                <label for="form_email">E-mail *</label>
                                                <input id="form_email" type="email" name="email" className="form-control" placeholder="johndoe@email.com" required="required" data-error="Valid email is required." />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </Col>

                                        <Col size="md-6">
                                            <div className="form-group">
                                                {/*  Phone */}
                                                <label for="form_phone">Phone</label>
                                                <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="XXX-XXX-XXXX" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col size="md-12">
                                            <div className="form-group">
                                                {/*  Message  */}
                                                <label for="form_message">Message *</label>
                                                <textarea id="form_message" name="message" className="form-control" placeholder="What can I do for you?" rows="6" required="required" data-error="Please include a message."></textarea>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Col size="md-12">
                                        {/* Submit Button */}
                                        <input type="submit" className="btn btn-outline-primary btn-send" value="Send message" />
                                    </Col>

                                    <Row>
                                        <Col size="md-12">
                                            <p className="text-light"><strong>*</strong><i> These fields are required. </i></p>
                                        </Col>
                                        <Col size="md-1">
                                        </Col>
                                    </Row>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>

                {/* Icon Contact Links */}
                <Row size="md-12" className="my-auto d-flex">
                    <Col size="md-1"></Col>
                        <Col size="md-10" className="icon-links">
                            <ul className="d-flex auto-mx justify-content-center">
                                <li className="list-inline-item icon"><a href="mailto:bwaycarl@gmail.com" rel="noreferrer" target="_blank"><i className="fas fa-envelope fa-3x"></i></a></li>
                                <li className="list-inline-item icon"><a href="tel:9178488949" rel="noreferrer" target="_blank"><i className="fas fa-mobile fa-3x"></i></a></li>
                                <li className="list-inline-item icon"><a href="https://github.com/BwayCarl" rel="noreferrer" target="_blank"><i className="fab fa-github fa-3x"></i></a></li>
                                <li className="list-inline-item icon"><a href="https://www.linkedin.com/in/carlos-martinez-8702b146/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin fa-3x"></i></a></li>
                                <li className="list-inline-item icon"><a href="https://www.facebook.com/carlos.martinez.1447/" rel="noreferrer" target="_blank"><i class="fab fa-facebook fa-3x"></i></a></li>
                                <li className="list-inline-item icon"><a href="https://twitter.com/BwayDev" rel="noreferrer" target="_blank"><i className="fab fa-twitter fa-3x"></i></a></li>
                                <li className="list-inline-item icon"><a href="https://www.instagram.com/broadwaycarl/" rel="noreferrer" target="_blank"><i className="fab fa-instagram fa-3x"></i></a></li>
                            </ul>
                        </Col>
                    <Col size="md-1"></Col>
                </Row>
            </Wrapper>
        </div>
    );
}

export default Contact;