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
            matthew jiang
            </Link>
            
            <div className="flex items-center gap-6">
            <Link to="/home" className="flex items-center gap-2 hover:text-blue-400 transition-colors h-full">
                <Home size={20} />
                <span className="hidden sm:inline">home</span>
            </Link>
            <Link to="/projects" 
                className="flex items-center gap-2 hover:text-blue-400 transition-colors h-full"
            >
                <Folder size={20} />
                <span className="hidden sm:inline">projects</span>
            </Link>
            <a href="/cv.pdf" className="flex items-center gap-2 hover:text-blue-400 transition-colors h-full">
                <FileText size={20} />
                <span className="hidden sm:inline">cv</span>
            </a> {/* <a> because we want to force page to load fully, dont care about speed*/}
            
            
          </div>
        </div>
      </div>
      
    </nav>
    
  );
};

export default Navigation;