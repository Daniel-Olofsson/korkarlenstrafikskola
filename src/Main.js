// Main.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Price from "./Price";
import Footer from "./components/footer/footer.js";
import Navbar from "./components/navbar/navbar.js";

const Main = () => {
  return (
    <Router>
      <>
        <div>
          <Navbar />
        </div>

        <div className="content bg-light">
          <Routes>
            <Route exact="true" path="/" element={<Home />} />
            <Route path="/price" element={<Price />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </>
      <Footer />
    </Router>
  );
};

export default Main;
