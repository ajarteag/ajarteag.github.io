import React from 'react';
import { Github, Linkedin, FileText, Home, ExternalLink, ChevronDown } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollIndicator from "./components/ScrollIndicator";

function App() {

    const featuredLinks = [
        {
          title: "My Tech Blog",
          description: "Read my latest thoughts on technology and development",
          image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=300&h=200",
          url: "https://blog.matthewjiang.com",
        },
        {
          title: "Portfolio",
          description: "Check out my latest projects and work",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=300&h=200",
          url: "https://portfolio.matthewjiang.com",
        },
        {
          title: "Photography",
          description: "View my photography collection",
          image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80&w=300&h=200",
          url: "https://photos.matthewjiang.com",
        },
      ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="select-none pointer-events-none">
            <img
              src="/kermit.png"
              alt="Matthew Jiang"
              className="w-48 h-48 rounded-full mx-auto mb-8 object-cover border-4 border-blue-500"
            />
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text leading-relaxed">
              Matthew Jiang
            </h1>
            </div>
            {/* <p className="text-xl text-gray-300 mb-8">
              
            </p> */}
            
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
              <a
                href="/cv.pdf"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-base sm:text-sm md:text-base"
              >
                <FileText size={20} />
                View CV
              </a>
              <a
                href="https://github.com/matthewyjiang"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors text-base sm:text-sm md:text-base"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/matthewyjiang"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#0077b5] rounded-lg hover:bg-[#006399] transition-colors text-base sm:text-sm md:text-base"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>


          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
            An ambitious engineering student with experience in software engineering, embedded software, and robotics.
            </p>
            <p className="text-gray-300 leading-relaxed">
            My Distro: Debian Bookworm
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'ROS', 'Linux', 'C', 'C++', 'Python', 'Verilog', 'MIPS', 'QML', 'MQTT', 'SQL', 'git'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Featured Projects</h3>
              <div className="space-y-4">
                <a href="https://usc-auv.com" className="block group">
                  <div className="flex items-center justify-between">
                    <span className="font-medium group-hover:text-blue-400 transition-colors">Barracuda</span>
                    <ExternalLink size={16} className="text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-400">USC AUV: A fully autonomous underwater vehicle for RoboSub</p>
                </a>
                <a href="https://github.com/matthewyjiang/project-wumbo" className="block group">
                  <div className="flex items-center justify-between">
                    <span className="font-medium group-hover:text-blue-400 transition-colors">Project Wumbo</span>
                    <ExternalLink size={16} className="text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-400">1st Place Winner - 2024 USC IEEE Hack IOT</p>
                </a>
              </div>
            </div>
          </section>

          {/* <section className="mb-16">
            <h2 className="text-3xl font-bold mt-8 mb-8">Featured Links</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-gray-800 rounded-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="relative h-48">
                    <img
                      src={link.image}
                      alt={link.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {link.description}
                    </p>
                    <div className="mt-4 flex items-center text-blue-400 text-sm font-medium">
                      <span>Learn more</span>
                      <ExternalLink size={16} className="ml-2" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section> */}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;