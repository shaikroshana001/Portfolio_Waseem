import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Background from "./Images/Background_Pic.jpg";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return(
    <div className="h-screen " style={{ backgroundImage: `url(${Background})`, backgroundSize: "cover", backgroundPosition: "center", height: "520vh", }}>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
          </div>
  )
}

export default App;