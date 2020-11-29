import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar"
// import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Home from "./pages/Home";
import About from "./pages/About"
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="container">
   <Router>
      <Navbar />
    
        <Jumbotron>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/portfolio" component={Portfolio} />
      </Jumbotron>
      <Footer />
  
  </Router>
  </div>
  );
}

export default App;
