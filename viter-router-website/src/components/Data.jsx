import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaHome,
  FaEnvelope,
} from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

export const heroContent = {
  title: "Welcome to MySite",
  description:
    "A simple one-page website built with React, React Icons, and smooth scrolling navigation.",
  buttonText: "Get in Touch",
};

export const aboutSections = [
  {
    heading: "Our Story",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",
  },
  {
    heading: "Our Mission",
    text: "Phasellus molestie magna non est bibendum non venenatis nisl tempor.",
  },
];

export const services = [
  {
    icon: <FaGithub className="text-blue-700" />,
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FaTwitter className="text-blue-700" />,
    title: "UI/UX Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FaLinkedin className="text-blue-700" />,
    title: "Digital Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const navLinks = [
  { label: "Home", href: "#", icon: <FaHome /> },
  { label: "About", href: "#about", icon: <FaCircleInfo /> },
];

// Dropdown Menu Links
export const dropdownLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact", icon: <FaEnvelope /> },
];
