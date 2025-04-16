import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <div className="flex justify-center gap-6 mb-2">
        <FaTwitter className="hover:text-blue-400" />
        <FaGithub className="hover:text-blue-400" />
        <FaLinkedin className="hover:text-blue-400" />
      </div>
      <p className="text-sm">© 2025 MySite. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
