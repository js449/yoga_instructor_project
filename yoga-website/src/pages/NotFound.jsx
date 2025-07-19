// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center h-full min-h-[70vh] p-8">
      <h1 className="text-6xl font-extrabold text-green-700 mb-6">404</h1>
      <p className="text-xl mb-8">Oops! The page you’re looking for does not exist.</p>
      <Link
        to="/"
        className="bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700 transition"
      >
        Go Back Home
      </Link>
    </section>
  );
};

export default NotFound;
