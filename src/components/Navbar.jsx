import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Etezazi Industries
        </Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-accent transition-colors">
            About
          </Link>
          <Link to="/services" className="hover:text-accent transition-colors">
            Services
          </Link>
          <Link to="/contact" className="hover:text-accent transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
