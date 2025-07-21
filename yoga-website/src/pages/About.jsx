import React, { useEffect, useState } from 'react';
import { client } from '../sanityClient';

const About = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "about"][0]{bio, mission, philosophy, image{asset->{url}}}`)
      .then((data) => setAbout(data))
      .catch(console.error);
  }, []);

  if (!about) return <div className="text-center mt-12 text-green-700 font-poppins">Loading...</div>;

  return (
    <section className="max-w-7xl mx-auto px-2 md:px-6 py-12 bg-white text-gray-900 font-poppins">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {about.image && (
          <div className="w-96 h-[30rem] rounded-full overflow-hidden border-4 border-green-700 flex-shrink-0 md:-ml-16">
            <img
              src={about.image.asset.url}
              alt="Jimmy Gill"
              className="w-full h-full object-cover object-center"
            />
          </div>
        )}

        <div className="flex-1 space-y-10">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-green-900 tracking-wide mb-4 text-center md:text-left">
            About Jimmy Gill
          </h1>

          <div className="space-y-8">
            <div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                {about.bio}
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-semibold text-green-700 border-b-2 border-green-500 pb-2 mb-4">
                Mission
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                {about.mission}
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-semibold text-green-700 border-b-2 border-green-500 pb-2 mb-4">
                Yoga Philosophy
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                {about.philosophy}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
