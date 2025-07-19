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

  if (!about) return <div>Loading...</div>;

  return (
    <section className="max-w-4xl mx-auto p-6">
      {about.image && (
        <img src={about.image.asset.url} alt="Jimmy Gill" className="w-48 rounded-full mx-auto mb-6" />
      )}
      <h1 className="text-3xl font-bold mb-4 text-center">About Jimmy Gill</h1>
      <p className="mb-4">{about.bio}</p>
      <h2 className="text-xl font-semibold mb-2">Mission</h2>
      <p className="mb-4">{about.mission}</p>
      <h2 className="text-xl font-semibold mb-2">Yoga Philosophy</h2>
      <p>{about.philosophy}</p>
    </section>
  );
};

export default About;
