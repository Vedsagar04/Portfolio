import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Hero from './Components/Hero/Hero.jsx';
import About from './Components/About/About.jsx';
import MyWork from './Components/MyWork/MyWork.jsx';
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MyWork />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
