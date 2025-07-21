import React, { useEffect, useState } from "react";
import { client } from "../sanityClient";
import { motion } from "framer-motion";
import TestimonialForm from "./TestimonialForm";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "testimonial"]{name, quote, image{asset->{url}}, rating}`)
      .then((data) => setTestimonials(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <section className="py-16 px-4 max-w-7xl mx-auto" id="testimonials">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 font-playfair">
          What Our Students Say
        </h2>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <TestimonialCard key={index} testimonial={t} />
          ))}
        </div>
      </section>

      <TestimonialForm />
    </>
  );
};

const TestimonialCard = ({ testimonial }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded((prev) => !prev);

  const maxLength = 150;
  const isLong = testimonial.quote.length > maxLength;
  const displayedQuote = expanded
    ? testimonial.quote
    : testimonial.quote.slice(0, maxLength) + (isLong ? "..." : "");

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-lg transition-all duration-300 flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ wordWrap: "break-word", overflowWrap: "break-word" }}
    >
      <div className="flex items-center space-x-5 mb-4">
        <img
          src={testimonial.image?.asset?.url}
          alt={testimonial.name}
          className="w-24 h-24 rounded-full object-cover border-2 border-green-600"
        />
        <h3 className="text-xl font-semibold text-gray-900 font-playfair">
          {testimonial.name}
        </h3>
      </div>

      <p
        className="text-gray-700 italic mb-3 text-justify leading-snug tracking-normal flex-grow"
        style={{ minHeight: "5.5rem" }}
      >
        {`“${displayedQuote}”`}
      </p>

      {isLong && (
        <button
          onClick={toggleExpanded}
          className="text-green-700 hover:underline text-sm mb-3 self-start"
          aria-label={expanded ? "Show less" : "Read more"}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}

      <div className="text-yellow-500 text-lg mt-auto">
        {"★".repeat(testimonial.rating)}{"☆".repeat(5 - testimonial.rating)}
      </div>
    </motion.div>
  );
};

export default Testimonials;
