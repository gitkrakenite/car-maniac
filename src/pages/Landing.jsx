import React from "react";
import About from "../components/About/About";
import Cars from "../components/Cars/Cars";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero/Hero";
import Pricing from "../components/Pricing/Pricing";

const Landing = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Cars />
      <Pricing />
      <About />
      <Footer />
    </div>
  );
};

export default Landing;
