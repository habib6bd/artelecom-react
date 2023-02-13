import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white font-bold text-xl">Our ISP</Link>
          <div>
            <Link to="/" className="text-white px-4 py-2 hover:bg-gray-700 rounded-full">Home</Link>
            <Link to="/plans" className="text-white px-4 py-2 hover:bg-gray-700 rounded-full ml-4">Plans</Link>
            <Link to="/contact" className="text-white px-4 py-2 hover:bg-gray-700 rounded-full ml-4">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
