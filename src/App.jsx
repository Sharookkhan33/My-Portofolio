import React, { useState, useMemo } from "react";

// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
       <Skills />
      <About />
      <Timeline />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
