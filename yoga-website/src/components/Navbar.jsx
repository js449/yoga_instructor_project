import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-green-700 font-semibold border-b-2 border-green-700"
      : "text-gray-700 hover:text-green-600";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Site Name */}
        <Link
          to="/"
          className="text-2xl font-bold text-green-700 hover:text-green-800"
        >
          Yoga with Jimmy
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/classes" className={linkClass}>
            Classes
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/testimonials" className={linkClass}>
            Testimonials
          </NavLink>
          <NavLink to="/gallery" className={linkClass}>
  Gallery
</NavLink>
<NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 rounded"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner px-6 pb-4 space-y-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              (isActive ? "font-semibold text-green-700" : "text-gray-700") +
              " block py-2 border-b border-gray-200"
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/classes"
            className={({ isActive }) =>
              (isActive ? "font-semibold text-green-700" : "text-gray-700") +
              " block py-2 border-b border-gray-200"
            }
            onClick={() => setIsOpen(false)}
          >
            Classes
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              (isActive ? "font-semibold text-green-700" : "text-gray-700") +
              " block py-2 border-b border-gray-200"
            }
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              (isActive ? "font-semibold text-green-700" : "text-gray-700") +
              " block py-2 border-b border-gray-200"
            }
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/testimonials"
            className={({ isActive }) =>
              (isActive ? "font-semibold text-green-700" : "text-gray-700") +
              " block py-2 border-b border-gray-200"
            }
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              (isActive ? "font-semibold text-green-700" : "text-gray-700") +
              " block py-2 border-b border-gray-200"
            }
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
