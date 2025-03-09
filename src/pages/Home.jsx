import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Record from "../components/Record";
import Timeline from "../components/Timeline";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Record /> */}
      <Timeline />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
