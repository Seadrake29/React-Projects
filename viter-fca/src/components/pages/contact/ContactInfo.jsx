// components/ContactInfo.jsx
import React from "react";
import {
  FaPhone,
  FaMobileAlt,
  FaEnvelope,
  FaFacebook,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="flex-1">
      <h2 className="text-6xl font-thin mb-6">Contact Us</h2>
      <ul className="space-y-4 text-gray-700">
        <li className="flex items-center gap-3">
          <FaPhone className="text-mygreen" />
          (049) 521-0732
        </li>
        <li className="flex items-center gap-3">
          <FaMobileAlt className="text-mygreen" />
          (+63) 908-202-0749 | (+63) 926-363-9722
        </li>
        <li className="flex items-center gap-3">
          <FaEnvelope className="text-mygreen" />
          info@fca.edu.ph
        </li>
        <li className="flex items-center gap-3">
          <FaFacebook className="text-mygreen" />
          facebook.com/frontlinechristianacademy
        </li>
        <li className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-mygreen" />
          Baloc Rd., Brgy. San Ignacio, San Pablo City, 4000 Laguna
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
