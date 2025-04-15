import React from "react";

const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className="text-center text-white py-6 mt-10 bg-blue-950">
      <p>Movie data provided by The Movie Database (TMDb) API </p>
      <p className="mt-2 text-sm">© {currentYear} Explorer App</p>
    </footer>
  );
};

export default Footer;
