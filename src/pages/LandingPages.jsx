import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Flow from "../components/Flow";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const LandingPages = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Flow />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPages;
