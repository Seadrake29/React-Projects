import React from "react";
import Header from "../home/Header";
import Navigation from "../home/Navigation";
import GivingOptions from "./GivingOptions";
import Gifts from "../about/Gifts";
import Footer from "../home/Footer";

const Donate = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <GivingOptions />
      <Gifts />
      <Footer />
    </div>
  );
};

export default Donate;
