import { useState } from "react";
import Header from "./components/home/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Faq from "./components/faq/faq";

function App() {
  return (
    <>
      <Home />
      <About />
      <Faq/>
    </>
  );
}

export default App;
