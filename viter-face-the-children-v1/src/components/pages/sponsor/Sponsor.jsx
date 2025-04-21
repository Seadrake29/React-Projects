import React from "react";
import Header from "../home/Header";
import Navigation from "../home/Navigation";
import SponsorSection from "./SponsorSection";
import Gifts from "../about/Gifts";
import Footer from "../home/Footer";

const Sponsor = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <SponsorSection />
      <Gifts />
      <Footer />
    </div>
  );
};

export default Sponsor;
