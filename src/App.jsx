import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Works from "./components/Works";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Home />
        <Works />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
