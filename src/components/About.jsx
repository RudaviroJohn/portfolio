import React from 'react';
import aboutImg from '../assets/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <img
          src={aboutImg}
          alt="About"
          className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-blue-900 mx-auto mb-8"
        />
        <h2 className="text-4xl font-extrabold text-blue-900 mb-8">About Me</h2>
        <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed text-left">
          <p className="mb-6">
            Hi, I’m Rudaviro John — a passionate Computer Scientist who enjoys building solutions that are both functional and meaningful. I specialize in using modern technologies to create responsive web applications, and I’m constantly exploring new tools to improve my craft.
          </p>
          <p>
            With a strong interest in software development, data analysis, and digital innovation, I enjoy turning complex problems into simple, elegant solutions. I’m also committed to continuous learning and love collaborating on impactful projects. Outside of coding, I’m involved in creative community work and enjoy using technology to inspire and educate others.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About; 