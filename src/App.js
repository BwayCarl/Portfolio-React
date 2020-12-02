import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar"
import Wrapper from "./components/Wrapper";
// import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer"

import Home from "./pages/Home";
import About from "./pages/About"
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

import 'bootstrap/dist/css/bootstrap.min.css';

// import {
//   CSSTransition,
//   TransitionGroup,
// } from 'react-transition-group';

class App extends Component {

  render() {

    return (
      <div className="App">
        <div id="jumbotron"></div>
        <Wrapper>
          <Router>
            <Navbar />
            {/* <Route render={({location}) => (
              <TransitionGroup>
                <CSSTransition
                key={location.key}
                  timeout={300}
                  classNames="fade">
                  <Switch location={location}> */}
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/resume" component={Resume} />
                    <Route exact path="/portfolio" component={Portfolio} />
                  {/* </Switch>
                </CSSTransition>
              </TransitionGroup>
            )} /> */}

            <Footer />
          </Router>
        </Wrapper>
      </div>
    );
  };
}
export default App;
