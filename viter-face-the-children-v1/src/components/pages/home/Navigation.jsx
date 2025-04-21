import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Use NavLink for active states
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm fixed top-0 left-0 right-0 z-50 mt-5">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <img src="./src/assets/ftc_svg_logo.svg" alt="Logo" className="h-8" />

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-sm text-gray-800 items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-black"
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "hover:text-orange-500"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "hover:text-orange-500"
              }
            >
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/strategy"
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "hover:text-orange-500"
              }
            >
              Strategy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "hover:text-orange-500"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sponsor"
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "hover:text-orange-500"
              }
            >
              Sponsor child
            </NavLink>
          </li>
          {/* Active state handling for Donate button */}
          <li>
            <NavLink
              to="/donate"
              className={({ isActive }) =>
                isActive ? "text-textyellow" : "hover:text-orange-500"
              }
            >
              <button className="bg-primary text-white text-sm px-4 py-1 rounded hover:bg-hover">
                Donate
              </button>
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button with Smooth Transition */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-primary"
        >
          <span className="transition-all duration-300 ease-in-out transform">
            {isOpen ? (
              <X
                size={24}
                className="transition-all duration-300 ease-in-out scale-100 opacity-100"
              />
            ) : (
              <Menu
                size={24}
                className="transition-all duration-300 ease-in-out scale-100 opacity-100"
              />
            )}
          </span>
        </button>
      </div>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-30 left-0 right-0 h-[calc(100vh-4rem)] w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <ul className="flex flex-col items-center justify-center space-y-4 mt-8 text-sm text-gray-800">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-orange-500 font-semibold" : "text-gray-800"
              }
              end
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-gray-800"
              }
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-gray-800"
              }
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/strategy"
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-gray-800"
              }
              onClick={() => setIsOpen(false)}
            >
              Strategy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-gray-800"
              }
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sponsor"
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-gray-800"
              }
              onClick={() => setIsOpen(false)}
            >
              Sponsor child
            </NavLink>
          </li>
          {/* Active state handling for Donate button */}
          <li>
            <NavLink
              to="/donate"
              className={({ isActive }) =>
                isActive ? "text-textyellow" : "text-gray-800"
              }
              onClick={() => setIsOpen(false)}
            >
              <button className="bg-blue-500 text-white text-sm px-4 py-1 w-32 rounded hover:bg-blue-600">
                Donate
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
