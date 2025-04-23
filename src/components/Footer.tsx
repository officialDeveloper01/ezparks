import React from 'react';
import { Link } from 'react-router-dom';
import { ParkingCircle, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ParkingCircle className="h-8 w-8 text-primary-500" />
              <span className="text-xl font-heading font-bold">
                <span className="text-primary-500">ez</span>
                <span className="text-secondary-500">Parks</span>
              </span>
            </div>
            <p className="text-gray-400">
              Revolutionizing parking with AI & IoT solutions for smarter cities and businesses.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-400 hover:text-primary-500 transition-colors">Solutions</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-primary-500 transition-colors">How It Works</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-primary-500 transition-colors">Pricing</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/future-innovations" className="text-gray-400 hover:text-primary-500 transition-colors">Future Innovations</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-500 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-primary-500 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-primary-500 transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-gray-400 hover:text-primary-500 transition-colors">Refund Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Tech Park, Bengaluru, Karnataka 560001, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary-500 flex-shrink-0" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary-500 flex-shrink-0" />
                <span className="text-gray-400">info@ezparks.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} ezParks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;