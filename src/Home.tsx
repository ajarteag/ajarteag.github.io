import React from 'react';
import { Github, Linkedin, FileText, ExternalLink, BotMessageSquare } from 'lucide-react';
import { Tooltip } from 'flowbite-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollIndicator from "./components/ScrollIndicator";

function Home() {

    const featuredLinks = [
        {
          title: "My Medium Site",
          description: "Read my latest thoughts on technology and development",
          image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*GbTb20qGI40kJW880gQwyA.jpeg",
          url: "https://medium.matthewyjiang.com",
        },
        {
            title: "USC AUV",
            description: "Meet the USC AUV Design Team",
            image: "/auv-website.png",
            url: "https://usc-auv.com",
        },
        {
            title: "RoboLAND",
            description: "Meet the Robot Locomotion and Navigation Dynamics Lab",
            image: "/robot-image.png",
            url: "https://sites.google.com/usc.edu/roboland",
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
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text leading-relaxed">
              Matthew Jiang
            </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8">
              Undergraduate Student @ USC
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
              <Tooltip content="An OpenWebUI powered interface for my locally hosted language models (approved authentication required)." placement="left" style="dark" arrow={false} className="w-64 text-md">
                <a
                    href="https://webui.matthewyjiang.com"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-blue-700 rounded-lg hover:bg-blue-600 transition-colors text-base sm:text-sm md:text-base"
                >
                    <BotMessageSquare size={20} />AI Chat
                </a>
                </Tooltip>
              <div id="tooltip-default" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                Tooltip content
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
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
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#006399] rounded-lg hover:bg-[#0077b5] transition-colors text-base sm:text-sm md:text-base"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>


          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
            An ambitious engineering student with experience in software engineering, embedded software, and robotics. Currently conducting research on 2D navigation algorithms for unknown mappable terrains at the USC Robot Locomotion and Dynamics Laboratory.
            </p>
            <p className="text-gray-300 leading-relaxed">
            My Distro: Arch BTW
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'ROS', 'Linux', 'C', 'C++', 'Python', 'Verilog', 'MIPS', 'QML', 'MQTT', 'SQL', 'git'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm select-none transition-colors hover:bg-blue-600/30 hover:text-blue-300">
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

          <section className="mb-16">
            <h2 className="text-3xl font-bold mt-8 mb-8">Featured Links</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-gray-800 rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-blue-500/10 flex flex-col h-full"
                >
                  <div className="relative h-48">
                    <img
                      src={link.image}
                      alt={link.title}
                      className="w-full h-40 object-fill"
                    />
                    
                  </div>
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-gray-400 text-sm group-hover:text-blue-500 transition-colors">
                      {link.description}
                    </p>
                    <div className="mt-auto flex items-center group-hover:text-blue-400 text-sm font-medium transition-colors">
                      <span>Learn more</span>
                      <ExternalLink size={16} className="ml-2" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
