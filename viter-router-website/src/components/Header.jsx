import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { navLinks, dropdownLinks } from "./Data";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-6 md:px-8 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">MySite</h1>

        {/* Chevron Button */}
        <button
          className="md:hidden text-gray-700 text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaChevronDown
            className={menuOpen ? "rotate-180 transition" : "transition"}
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-700 hover:bg-blue-200 hover:text-blue-600 p-1 rounded flex items-center gap-2"
            >
              {link.icon} {link.label}
            </a>
          ))}

          <div className="relative">
            <button
              className="text-gray-700 hover:bg-blue-200 hover:text-blue-600 p-1 rounded flex items-center gap-2 text-lg"
              onClick={() => setMoreOpen(!moreOpen)}
            >
              More{" "}
              <FaChevronDown
                className={moreOpen ? "rotate-180 transition" : "transition"}
              />
            </button>
            {moreOpen && (
              <div className="absolute bg-white shadow-lg rounded mt-2 p-3 space-y-3 text-left z-10 text-lg">
                {dropdownLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block hover:bg-gray-100 p-1 rounded flex items-center gap-2"
                  >
                    {item.icon} {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-4 md:hidden flex flex-col gap-4 text-lg">
          {[...navLinks, ...dropdownLinks].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 flex items-center gap-2"
            >
              {link.icon} {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
