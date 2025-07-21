import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md fixed w-full top-0 left-0 z-50">
      {/* Logo */}
      <div className="text-4xl font-extrabold text-blue-900 tracking-widest select-none">
        RJ
      </div>
      {/* Hamburger */}
      <div className="relative">
        <button
          className="flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-1 w-6 bg-blue-900 rounded transition-all duration-300 mb-1 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-1 w-6 bg-blue-900 rounded transition-all duration-300 mb-1 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-1 w-6 bg-blue-900 rounded transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg py-2 z-50">
            <a href="#about" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">About</a>
            <a href="#skills" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">Skills</a>
            <a href="#projects" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">Projects</a>
            <a href="#contact" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 