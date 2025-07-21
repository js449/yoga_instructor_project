// src/components/Footer.jsx
import React from "react";
import { Facebook, Instagram } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="bg-green-800 text-green-200 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left mb-4 md:mb-0">
          © {new Date().getFullYear()} Yoga with Jimmy. All rights reserved.
        </p>

        <div className="flex space-x-6">
          {/* <a
            href="mailto:jimmy@example.com"
            className="hover:text-white transition"
            aria-label="Email"
          >
            📧
          </a> */}
          <a
            href="https://www.facebook.com/share/16dwNnZdio/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="Facebook"
          >
            <img
    src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
    alt="Facebook"
    className="w-6 h-6"
  />
          </a>
          <a
            href="https://www.instagram.com/urbanyoginz?igsh=MTQ2dWU3OHk1NDBzYQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="Instagram"
          >
            <img
    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
    alt="Instagram"
    className="w-6 h-6"
  />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
