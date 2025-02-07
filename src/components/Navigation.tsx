import React from 'react';
import { Home, FileText, Github, Linkedin } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="bg-gray-900/50 backdrop-blur-sm fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-xl font-bold">MJ</a>
          
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Home size={20} />
              <span className="hidden sm:inline">Home</span>
            </a>
            <a href="/cv" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <FileText size={20} />
              <span className="hidden sm:inline">CV</span>
            </a>
            <a 
              href="https://github.com/matthewjiang" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <Github size={20} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/matthewjiang" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={20} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;