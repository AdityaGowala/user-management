import { useState } from "react";

import { BsSun, BsMoon } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed w-full top-0 z-50 backdrop-blur-md shadow-md transition-colors duration-300 ${
        darkMode
          ? "bg-gray-900/80 text-white"
          : "bg-white/80 text-gray-900 border-b border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-extrabold font-poppins tracking-tight cursor-pointer hover:text-blue-600 transition-colors">
          Uzence <span className="text-blue-600">Project</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 font-medium">
          <a href="#home" className="relative group transition-colors">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
          </a>

          {/* Documentation PDF Link */}
          <a
            href="/documentation.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group transition-colors"
          >
            Documentation
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
          </a>
        </div>

        {/* Dark/Light Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="text-2xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <BsSun /> : <BsMoon />}
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Open Menu"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden px-6 pt-4 pb-6 flex flex-col gap-4 text-lg ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
          }`}
        >
          <a
            href="#home"
            onClick={closeMenu}
            className="hover:text-blue-600 transition-colors"
          >
            Home
          </a>

          {/* Documentation Link in Mobile Menu */}
          <a
            href="/documentation.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="hover:text-blue-600 transition-colors"
          >
            Documentation
          </a>
        </div>
      )}
    </nav>
  );
};
