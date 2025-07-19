import React, { useEffect, useState } from "react";
import { client } from "../sanityClient";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "class"]{title, image{asset->{url}}, time, description}`)
      .then((data) => setClasses(data))
      .catch(console.error);
  }, []);

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto font-poppins" id="classes">
      <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-16">
  Let's do some yoga with Jimmy
</h1>

      <h3 className="font-playfair text-xl font-semibold text-center mb-12">
        Our Yoga Classes
      </h3>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
        {classes.map((cls, index) => (
          <ClassCard key={index} cls={cls} />
        ))}
      </div>
    </section>
  );
};

const ClassCard = ({ cls }) => {
  const [expanded, setExpanded] = useState(false);

  const maxLength = 150;
  const isLong = cls.description.length > maxLength;
  const displayedDesc = expanded ? cls.description : cls.description.slice(0, maxLength) + (isLong ? "..." : "");

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 flex flex-col break-words"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      style={{ overflowWrap: "break-word", wordWrap: "break-word" }}
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-2 font-playfair">{cls.title}</h3>
      <img
        src={cls.image?.asset?.url}
        alt={cls.title}
        className="w-full h-48 object-cover rounded-t-lg mb-4"
      />
      <p className="text-sm text-gray-600 mb-2">Time: {cls.time}</p>
      <p className="text-gray-700 mb-2 whitespace-pre-wrap">{displayedDesc}</p>

      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-600 hover:underline text-sm mb-4"
          aria-label={expanded ? "Show less" : "Read more"}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}

      <Link
        to="/contact"
        className="mt-auto inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
      >
        Enquire Now
      </Link>
    </motion.div>
  );
};

export default Classes;
