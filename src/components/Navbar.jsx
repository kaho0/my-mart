import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa"; // Importing icons
import logo from "./../../public/images/image-removebg-preview.png"; // Update with your logo path

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="MyMart Logo" className="h-16" />
        </Link>
        <div className="flex space-x-6">
          <Link
            to="/"
            className="flex items-center text-gray-800 font-semibold hover:text-gray-600 transition"
          >
            <FaHome className="mr-1" /> {/* Home icon */}
            Home
          </Link>
          <Link
            to="/about"
            className="flex items-center text-gray-800 font-semibold hover:text-gray-600 transition"
          >
            <FaInfoCircle className="mr-1" /> {/* About icon */}
            About
          </Link>
          <Link
            to="/contact"
            className="flex items-center text-gray-800 font-semibold hover:text-gray-600 transition"
          >
            <FaEnvelope className="mr-1" /> {/* Contact icon */}
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
