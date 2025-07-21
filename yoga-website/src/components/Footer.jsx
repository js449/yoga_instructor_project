// src/components/Footer.jsx
import React from "react";
import { FaFacebook, FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-green-800 text-green-200 py-8 mt-16">
  <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center space-y-4">
    <p>
      © {new Date().getFullYear()} Yoga with Jimmy. All rights reserved.
    </p>

    <div className="flex space-x-6">
      <a
        href="https://www.facebook.com/share/16dwNnZdio/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 transition text-2xl"
        aria-label="Facebook"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.instagram.com/urbanyoginz?igsh=MTQ2dWU3OHk1NDBzYQ=="
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-pink-500 transition text-2xl"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
    </div>
  </div>
</footer>
  );
};

export default Footer;
