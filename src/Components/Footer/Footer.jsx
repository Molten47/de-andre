import React from 'react';
import { motion } from 'framer-motion';
const Footer = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          // Smooth scroll to the section
          section.scrollIntoView({ behavior: 'smooth' });
        }
        
      };
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section - Takes up more space on the left */}
          <div className="space-y-4 md:col-span-1">
            <h2 className="text-xl font-bold">Portfolio.</h2>
            <p className="text-gray-400 max-w-xs">Creating meaningful digital experiences.</p>
          </div>

          {/* Push Quick Links and Services to the right */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li><a 
                href="#home" 
                className="text-gray-400 hover:text-white transition"
                onClick={()=> scrollToSection ('home')}
                >Home</a></li>
                <li><a href="#about" 
                className="text-gray-400 hover:text-white transition"
                onClick={()=> scrollToSection('about')}
                >About</a></li>
                <li><a 
                href="portfolio" 
                className="text-gray-400 hover:text-white transition"
                onClick={()=> scrollToSection('portfolio')}
                >Portfolio</a></li>
                <li><a 
                href="#process" 
                className="text-gray-400 hover:text-white transition"
                onClick={()=> scrollToSection('process')}
                >Process</a></li>
                <li><a 
                href="#testimonials" 
                className="text-gray-400 hover:text-white transition"
                onClick={()=> scrollToSection('testimonial')}
                >Testimonials</a></li>
                <li><a 
                href="#contact" 
                className="text-gray-400 hover:text-white transition"
                onClick={()=> scrollToSection('contact')}
                >Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="space-y-2">
                <li><a href="#ui-ux" className="text-gray-400 hover:text-white transition">UI/UX Design</a></li>
                <li><a href="#mobile" className="text-gray-400 hover:text-white transition">Mobile Design</a></li>
                <li><a href="#website" className="text-gray-400 hover:text-white transition">Website Design</a></li>
                <li><a href="#user-experience" className="text-gray-400 hover:text-white transition">User Experience</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Portfolio. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">Designed and built with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;