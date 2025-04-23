import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ParkingCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Future Innovations', path: '/future-innovations' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <ParkingCircle className="h-8 w-8 text-primary-500" />
          <span className="text-xl font-heading font-bold">
            <span className="text-primary-500">ez</span>
            <span className="text-secondary-500">Parks</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition-colors duration-300 ${
                location.pathname === link.path
                  ? 'text-primary-500'
                  : 'text-gray-700 hover:text-primary-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="hidden md:block">
          <button className="btn btn-primary">Get a Demo</button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="container py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-primary-500'
                    : 'text-gray-700 hover:text-primary-500'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <button className="btn btn-primary w-full">Get a Demo</button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;