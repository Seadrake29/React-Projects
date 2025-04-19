import { useState } from "react";
import Header from "./components/home/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Faq from "./components/faq/faq";
import Strategy from "./components/strategy/Strategy";
import Contact from "./components/contact/Contact";
import Sponsor from "./components/sponsor/Sponsor";
import Donate from "./components/donate/Donate";

function App() {
  return (
    <>
      <Home />
      <About />
      <Faq />
      <Strategy />
      <Contact />
      <Sponsor />
      <Donate />
    </>
  );
}

export default App;
