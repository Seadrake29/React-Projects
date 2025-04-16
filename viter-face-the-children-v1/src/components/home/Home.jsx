import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import CreatingOpportunity from "./CreatingOpportunity";
import Stats from "./Stats";
import Services from "./Services";
import Affiliates from "./Affiliates";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div>
        <Header />
        <Navigation />

        <CreatingOpportunity />
        <Stats />
        <Services />
        <Affiliates />
        <Footer />
      </div>
    </>
  );
};

export default Home;
