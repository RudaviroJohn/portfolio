import React from 'react';
import heroImg from '../assets/bart-zalewski-E6loQeZDIiM-unsplash.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-blue-900/60">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 text-center drop-shadow-lg overflow-hidden">
          <span className="animate-slide-in-left inline-block">Welcome to</span>
          <span className="animate-slide-in-right inline-block ml-4">My Portfolio</span>
        </h1>
        <p className="text-2xl md:text-3xl text-blue-100 text-center drop-shadow">Showcasing my work, skills, and experience</p>
      </div>
    </section>
  );
};

export default Hero; 