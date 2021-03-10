import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import './app.css';
// import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from "../../myreactportfolio/src/components/navbar";
import Header from "../../myreactportfolio/src/components/header";
import AboutMe from "../../myreactportfolio/src/components/aboutme";
import Experience from "../../myreactportfolio/src/components/experience";
import Projects from '../../myreactportfolio/src/components/projects';
import Contact from '../../myreactportfolio/src/components/contact';
import Footer from '../../myreactportfolio/src/components/footer';


function App() {
  return (

    
      <div>
        <p>hallo worlds</p>
      <Navbar />
      <Header />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      </div>
    

  );
}

export default App;