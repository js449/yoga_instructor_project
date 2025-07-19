import React, { useEffect, useState } from "react";
import { client } from "../sanityClient";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "gallery"]{title, caption, image{asset->{url}}}`)
      .then((data) => setImages(data))
      .catch(console.error);
  }, []);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto font-poppins">
      <h2 className="text-3xl font-bold text-center mb-12 font-playfair">Gallery</h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((img, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src={img.image?.asset?.url}
              alt={img.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{img.title}</h3>
              <p className="text-sm text-gray-600">{img.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
