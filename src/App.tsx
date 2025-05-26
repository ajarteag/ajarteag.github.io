import React from 'react';
import { Github, Linkedin, FileText, ExternalLink, BotMessageSquare } from 'lucide-react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Publications from './pages/Publications';

function App() {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/publications" element={<Publications />} />
          </Routes>
        </Router>
        
      );
}

export default App;