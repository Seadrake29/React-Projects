import React from "react";
import Header from "../home/Header";
import Questions from "./Questions";
import Navigation from "../home/Navigation";
import ContactForm from "./ContactForm";
import GiftsWhite from "./GiftsWhite";
import Footer from "../home/Footer";

const Faq = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Questions />
      <ContactForm />
      <GiftsWhite />
      <Footer />
    </div>
  );
};

export default Faq;
