import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4">&copy; {new Date().getFullYear()} Rudaviro John. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:underline">LinkedIn</a>
          <a href="#" className="hover:underline">GitHub</a>
          <a href="#" className="hover:underline">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 