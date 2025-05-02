import React, { useState } from "react";
import AboutMenu from "./AboutMenu";
import AboutContent from "./AboutContent";
import Header from "../../../partials/Header";

import TeamSection from "./TeamSection";
import Footer from "../../../partials/Footer";

const About = () => {
  const [selected, setSelected] = useState("The Founders");

  return (
    <>
      <Header />

      <div className="max-w-[85%] mx-auto px-4 py-[120px] font-raleway">
        <h1 className="text-7xl font-thin text-center mb-[120px]">About Us</h1>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/4">
            <AboutMenu selected={selected} onSelect={setSelected} />
          </div>
          <div className="md:w-3/4">
            <AboutContent selected={selected} />
          </div>
        </div>
      </div>
      <TeamSection />
      <Footer />
    </>
  );
};

export default About;
