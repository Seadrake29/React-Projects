import React from "react";
import Header from "../../../partials/Header";
import Banner from "./Banner";
import YouTubeEmbed from "./YoutubeEmbed";
import Perks from "./Perks";
import Testimonial from "./Testimonial";
import Scholarship from "./Scholarship";
import Location from "./Location";
import PartnersSection from "./PartnerSection";
import Footer from "../../../partials/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <YouTubeEmbed videoId="IfZIR11Zdn4" />
      <Perks />
      <Testimonial />
      <Scholarship />
      <Location />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Home;
