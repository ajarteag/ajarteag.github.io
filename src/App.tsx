import React from 'react';
import { Github, Linkedin, FileText, Home, ExternalLink } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
              alt="Matthew Jiang"
              className="w-48 h-48 rounded-full mx-auto mb-8 object-cover border-4 border-blue-500"
            />
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Matthew Jiang
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Software Engineer & Technology Enthusiast
            </p>
            
            <div className="flex justify-center gap-4">
              <a
                href="/cv"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FileText size={20} />
                View CV
              </a>
              <a
                href="https://github.com/matthewjiang"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/matthewjiang"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#0077b5] rounded-lg hover:bg-[#006399] transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Hi, I'm Matthew! I'm passionate about building innovative solutions and creating impactful software. 
              With expertise in full-stack development and a keen interest in emerging technologies, 
              I strive to create elegant solutions to complex problems.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing my knowledge with the developer community.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'GraphQL'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Featured Projects</h3>
              <div className="space-y-4">
                <a href="#" className="block group">
                  <div className="flex items-center justify-between">
                    <span className="font-medium group-hover:text-blue-400 transition-colors">Project Alpha</span>
                    <ExternalLink size={16} className="text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-400">A revolutionary web application</p>
                </a>
                <a href="#" className="block group">
                  <div className="flex items-center justify-between">
                    <span className="font-medium group-hover:text-blue-400 transition-colors">Project Beta</span>
                    <ExternalLink size={16} className="text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-400">An innovative mobile solution</p>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;