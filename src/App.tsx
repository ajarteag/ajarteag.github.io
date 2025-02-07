import React from 'react';
import { Github, Linkedin, FileText, ExternalLink, BotMessageSquare } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';

function App() {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Router>
        
      );
}

export default App;