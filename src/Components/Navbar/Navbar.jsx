import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Smooth scroll to the section
      section.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after clicking
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex justify-center relative w-full">
        <nav className='bg-black fixed z-20 rounded-b-lg shadow-md w-auto mx-auto px-6 md:px-12 py-4'>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className='list-none flex gap-6 text-white font-medium text-base whitespace-nowrap'>
              <li 
                className="hover:text-gray-300 cursor-pointer font-primary transition-colors"
                onClick={() => scrollToSection('home')}
              >
                Home
              </li>
              <li 
                className="hover:text-gray-300 cursor-pointer font-primary transition-colors"
                onClick={() => scrollToSection('about')}
              >
                About Us
              </li>
              <li 
                className="hover:text-gray-300 cursor-pointer font-primary transition-colors"
                onClick={() => scrollToSection('portfolio')}
              >
                Portfolio
              </li>
              <li 
                className="hover:text-gray-300 cursor-pointer font-primary transition-colors"
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </li>
            </ul>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-end">
            <button 
              onClick={toggleMenu}
              className="text-white focus:outline-none relative z-50"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Full Screen Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-95 z-40 flex items-center justify-center transition-all duration-300">
          {/* Added Close Button */}
          <button 
            className="absolute top-4 right-4 text-white focus:outline-none z-50"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="w-full h-full flex flex-col items-center justify-center">
            <ul className='flex flex-col gap-8 text-white text-center text-xl'>
              <li 
                className="hover:text-gray-300 cursor-pointer font-primary py-2 px-8 transition-all duration-300 transform hover:scale-110"
                onClick={() => scrollToSection('home')}
              >
                Home
              </li>
              <li 
                className="hover:text-gray-300 cursor-pointer font-primary py-2 px-8 transition-all duration-300 transform hover:scale-110"
                onClick={() => scrollToSection('about')}
              >
                About Me
              </li>
              <li 
                className="hover:text-gray-300 cursor-pointer font-primary py-2 px-8 transition-all duration-300 transform hover:scale-110"
                onClick={() => scrollToSection('portfolio')}
              >
                Portfolio
              </li>
              <li 
                className="hover:text-gray-300 cursor-pointer font-primary py-2 px-8 transition-all duration-300 transform hover:scale-110"
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar