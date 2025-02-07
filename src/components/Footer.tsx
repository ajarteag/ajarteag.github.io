import React from 'react';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Matthew Jiang. All rights reserved.
          </p>
          <a 
            href="mailto:jiangmy@usc.edu"
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Mail size={20} />
            jiangmy [at] usc [dot] edu
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;