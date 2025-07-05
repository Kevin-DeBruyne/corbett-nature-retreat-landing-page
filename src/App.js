import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Accommodation from "./components/Accommodation.js";
import Gallery from "./components/Gallery.js";
import Activities from "./components/Activities.js";
import JimCorbett from "./components/JimCorbett.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Accommodation />
      <Gallery />
      <Activities />
      <JimCorbett />
      <Contact />
      <Footer />
    </>
  );
}
export default App;