import { ArrowLeft, Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Visions', href: '/visions' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', closeMenuOnResize);
    return () => {
      window.removeEventListener('resize', closeMenuOnResize);
    };
  }, []);

  const whiteTextPaths = ['/about','/visions' ];
  const isWhiteText = whiteTextPaths.includes(location.pathname);
  const menuIconColor = isWhiteText ? 'text-white' : 'text-black';

  return (
    <div className="relative z-50">
      {/* Navbar */}
      <nav className={`absolute w-full z-50 flex justify-end items-center p-5 lg:px-10 ${isWhiteText ? 'text-gray-400' : 'text-black'}`}>
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-16">
          {links.map((link) => (
            <div className="flex flex-col items-center" key={link.name}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `hover:scale-105 duration-300 font-semibold ${
                    isActive
                      ? isWhiteText
                        ? 'text-[#7C38EB] underline'
                        : 'text-[#7C38EB] underline'
                      : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            </div>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex md:hidden">
          <button onClick={handleToggle}>
            {isOpen ? <X className={menuIconColor} /> : <Menu className={menuIconColor} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <nav className="flex flex-col justify-between items-center p-5 w-1/2 h-screen bg-black text-white fixed top-0 right-0 z-40 shadow-md">
          <div className="flex flex-col gap-5 w-full mt-8">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `hover:bg-gray-200 hover:text-black rounded-lg p-2 w-full text-center ${
                    isActive ? 'bg-white text-black' : ''
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
