import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronUp } from 'lucide-react';
import { NavItem } from '../types';
import Logo from './Logo';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Tracker', href: '#tracker' },
  { label: 'Testimonials', href: '#testimonials' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (scrollPosition > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto container-padding">
          <nav className="flex items-center justify-between">
            <div className="flex items-center">
              <Logo scrolled={scrolled} />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`font-medium transition-colors duration-200 hover:text-primary-500 ${
                    scrolled ? 'text-gray-800' : 'text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#get-started" 
                className="btn-primary"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-800 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
              )}
            </button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto container-padding py-4 bg-white">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-800 font-medium hover:text-primary-500 transition-colors duration-200"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#get-started" 
                className="btn-primary"
                onClick={closeMenu}
              >
                Get Started
              </a>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-primary-500 text-white p-3 rounded-full shadow-lg z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0.8,
          pointerEvents: showScrollTop ? 'auto' : 'none'
        }}
        transition={{ duration: 0.2 }}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </motion.button>
    </>
  );
};

export default Navbar;