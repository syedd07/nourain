'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Updated import

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Added state for scroll
  const currentPath = usePathname(); // Updated hook

  useEffect(() => { // Added useEffect to handle scroll
    const handleScroll = () => {
      if (window.scrollY > 50) { // Threshold for changing background
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Process', href: '/process' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-shadow duration-300 py-6 ${isScrolled ? 'bg-white shadow-lg' : 'bg-[#f8fafc] shadow-md'}`}>
      <div className="flex flex-wrap items-center justify-between gap-5 w-full px-4 sm:px-6 lg:px-8">
        {/* Logo for Desktop */}
        <a href="/" className="hidden sm:block">
          <img
            src="https://readymadeui.com/readymadeui.svg"
            alt="logo"
            className="w-36"
          />
        </a>
        {/* Logo for Mobile */}
        <a href="/" className="block sm:hidden">
          <img
            src="https://readymadeui.com/readymadeui-short.svg"
            alt="logo"
            className="w-9"
          />
        </a>

        {/* Desktop Navigation Menu */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`
                relative inline-block  text-lg 
                transition-colors duration-300 
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] 
                after:bg-[#007bff] after:transition-transform after:duration-300 
                after:scale-x-0 after:origin-left 
                hover:text-[#007bff] hover:after:scale-x-100
                ${currentPath === link.href ? 'text-[#007bff] after:scale-x-100' : 'text-gray-700'}
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right-side Buttons */}
        <div className="flex lg:ml-auto space-x-4 items-center">
          <button className="px-4 py-2 text-sm rounded-full font-bold text-gray-500 border-2 bg-transparent hover:bg-gray-50 transition-all ease-in-out duration-300">
            Login
          </button>
          <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
            Sign up
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="toggleOpen"
            className="lg:hidden"
            onClick={() => setIsOpen(true)}
            aria-controls="collapseMenu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Background Overlay */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black opacity-50 lg:hidden z-40"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            ></div>
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        id="collapseMenu"
        className={`fixed top-0 left-0 h-full w-1/2 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out lg:hidden z-50`}
      >
        {/* Close Button */}
        <button
          id="toggleClose"
          className="absolute top-4 right-4 rounded-full bg-white w-9 h-9 flex items-center justify-center border"
          onClick={() => setIsOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5 fill-black"
            viewBox="0 0 320.591 320.591"
          >
            <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
            <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul className="flex flex-col ml-4 mt-16 space-y-4 px-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`hover:text-[#007bff]  text-lg transition-colors duration-300 ${currentPath === link.href ? 'text-[#007bff]' : 'text-gray-700'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;