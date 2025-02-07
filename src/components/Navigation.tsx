import React from 'react';
import { Home, FileText, Github, Linkedin, Folder} from 'lucide-react';
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <nav className="bg-gray-900/50 backdrop-blur-lg fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-bold flex items-center gap-2 hover:text-blue-400 transition-colors h-full">
        <img src='/favicon.svg' className="h-6 w-auto object-contain pointer-events-none" alt="Logo"/>
        Matthew Jiang
        </Link>
          
          <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Home size={20} />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <Link to="/projects" 
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <Folder size={20} />
              <span className="hidden sm:inline">Projects</span>
            </Link>
            <Link to="/cv.pdf" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <FileText size={20} />
              <span className="hidden sm:inline">CV</span>
            </Link>
            
            
          </div>
        </div>
      </div>
      
    </nav>
    
  );
};

export default Navigation;