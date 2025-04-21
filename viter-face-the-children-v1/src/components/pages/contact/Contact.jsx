import React from "react";
import MainContact from "./MainContact";
import Header from "../home/Header";
import Navigation from "../home/Navigation";
import TeamSection from "./TeamSection";
import Footer from "../home/Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <MainContact />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Contact;
