import React from "react";
import { Link } from "react-router-dom";
import yogaBg from "../assets/yoga-hero.jpeg";

const Home = () => {
  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center px-6 bg-black"
    >
      {/* Background Image */}
      <img
        src={yogaBg}
        alt="Yoga Hero"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      {/* Content */}
      <div className="relative z-20 bg-white bg-opacity-80 p-8 rounded-xl max-w-2xl text-center shadow-lg font-poppins">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 font-playfair">
          Welcome to Yoga with Jimmy
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Begin your journey to peace, strength, and mindfulness.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition"
        >
          Book a Session
        </Link>
      </div>
    </div>
  );
};

export default Home;
