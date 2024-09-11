import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Helper function to check if a link is active
  const isActive = (path) => {
    return location.pathname === path ? "bg-primary-darkBlue" : "";
  };

  return (
    <nav className="fixed top-0 w-full h-[55px] bg-gradient-to-r from-blue-900 to-pink-200 shadow-md z-50 flex items-center justify-between px-4">
      <div className="flex items-center space-x-4">
        <a className="text-white relative text-2xl font-extrabold" href="/">
          BHISHAN SAH
        </a>
        <span className="h-0.5 w-20 bg-lime-400 inline-block absolute left-0 bottom-4  md:bottom-3"></span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-6 bg-gradient-to-r to-blue-900 from-pink-200 py-1 px-6 rounded">
        <a href="/" className={`text-white hover:bg-primary-darkBlue px-3 py-1 rounded ${isActive("/")}`}>Home</a>
        <a href="/news" className={`text-white hover:bg-primary-darkBlue px-3 py-1 rounded ${isActive("/news")}`}>News</a>
        <a href="/contact" className={`text-white hover:bg-primary-darkBlue px-3 py-1 rounded ${isActive("/contact")}`}>Contact</a>
        <a href="/about" className={`text-white hover:bg-primary-darkBlue px-3 py-1 rounded ${isActive("/about")}`}>About</a>
      </div>

      {/* Mobile Menu Button */}
      <button className="block md:hidden text-white" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm transition-opacity">
          <div className="relative bg-gray-800 text-white w-4/5 h-auto rounded-lg flex flex-col items-center justify-center p-6 space-y-2">
            <button
              className="absolute  rounded-tr-lg  top-0 right-0 text-[12px] bg-gray-600 px-2 py-1  text-white"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={faTimes} size="2x" />
            </button>
            <ul className="space-y-3 w-[100%] text-left 5 text-lg py-8">
              <li>
                <a
                  href="/"
                  className={`block p-2 rounded hover:bg-primary-lightBlue ${isActive("/")}`}
                  onClick={toggleMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/news"
                  className={`block p-2 rounded hover:bg-primary-lightBlue ${isActive("/news")}`}
                  onClick={toggleMenu}
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className={`block p-2 rounded hover:bg-primary-lightBlue ${isActive("/contact")}`}
                  onClick={toggleMenu}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className={`block p-2 rounded hover:bg-primary-lightBlue ${isActive("/about")}`}
                  onClick={toggleMenu}
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
