import React from "react";
import Header from "../home/Header";
import Navigation from "../home/Navigation";
import Transform from "./Transform";
import Vision from "./Vision";
import Missions from "./Missions";
import Gifts from "./Gifts";
import Footer from "../home/Footer";

const About = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Transform />
      <Vision />
      <Missions />
      <Gifts />
      <Footer />
    </div>
  );
};

export default About;
