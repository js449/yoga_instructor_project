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
      <h2 className="text-4xl font-playfair font-bold text-center mb-12 text-gray-800">
        Gallery
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
          >
            <img
              src={img.image?.asset?.url}
              alt={img.title}
              className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
              <h3 className="text-white text-xl font-playfair font-semibold mb-1 text-center">
                {img.title}
              </h3>
              <p className="text-gray-200 text-sm text-center">{img.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
