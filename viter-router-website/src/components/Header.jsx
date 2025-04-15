import React, { useState } from "react";
import { FaHome, FaEnvelope, FaChevronDown } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 px-6 md:px-8">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">MySite</h1>

        {/* Chevron Button */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaChevronDown
            className={menuOpen ? "rotate-180 transition" : "transition"}
          />
        </button>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 flex items-center gap-1"
          >
            <FaHome /> Home
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-blue-600 flex items-center gap-1"
          >
            <FaCircleInfo /> About
          </a>
          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-600">
              More ▾
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-2 p-2 space-y-2 text-left">
              <a href="#services" className="block hover:text-blue-600">
                Services
              </a>
              <a href="#portfolio" className="block hover:text-blue-600">
                Portfolio
              </a>
              <a
                href="#contact"
                className="block hover:text-blue-600 flex items-center gap-1"
              >
                <FaEnvelope /> Contact
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-4 md:hidden flex flex-col gap-3 text-sm">
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 flex items-center gap-1"
          >
            <FaHome /> Home
          </a>
          <a href="#about" className="text-gray-700 hover:text-blue-600">
            About
          </a>
          <a href="#services" className="text-gray-700 hover:text-blue-600">
            Services
          </a>
          <a href="#portfolio" className="text-gray-700 hover:text-blue-600">
            Portfolio
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-blue-600 flex items-center gap-1"
          >
            <FaEnvelope /> Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
