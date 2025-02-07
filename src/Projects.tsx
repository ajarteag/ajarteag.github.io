import React from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const projects = [
  {
    title: "Barracuda AUV",
    description: "Developing a brand new submarine called the Barracuda. Associated with the USC AUV Design Team, serving as software lead.",
    image: "/mantaray.jpg",
    tags: ["ROS", "Robotics", "AUV", "ROV", "C++", "Python", "Docker", "Kubernetes"],
    github: "https://github.com/usc-robosub",
    featured: true,
    paper: null,
    demo: null,
    stars: 0
  },
  {
    title: "USC AUV Website",
    description: "A team website created using Vite + React + TypeScript. Utilized the Google Calendar API to create a functional updating events list.",
    image: "/auv-website.png",
    tags: ["Vite", "TypeScript", "Node.js", "React", "HTML", "CSS", "Tailwind", "API"],
    github: "https://github.com/usc-robosub/usc-robosub.github.io",
    featured: false,
    paper: null,
    demo: "https://usc-auv.com",
    stars: 0
  },
  {
    title: "Project Wumbo",
    description: "Wumbo is a rythmn game that you play with your cardboard guitar and a screen. Won 1st place at the 2024 IEEE IOT Hackathon.",
    image: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/842/449/datas/original.jpg",
    tags: ["ESP32", "IOT", "MIDI", "SDL", "Python", "C", "C++"],
    github: "https://github.com/matthewyjiang/project-wumbo",
    featured: false,
    paper: null,
    demo: null,
    stars: 0
  },
  {
    title: "Verilog CNN",
    description: "A Convolutional Neural Network Implemented in System Verilog.",
    image: "https://saturncloud.io/images/blog/a-comprehensive-guide-to-convolutional-neural-networks-the-eli5-way.webp",
    tags: ["Verilog", "System Verilog", "Modelsim", "Machine Learning", "CNN", "Neural Networks", "HDL"],
    github: "https://github.com/matthewyjiang/ee454-final-project",
    featured: false,
    paper: null,
    demo: null,
    stars: 0
  },
  {
    title: "RAG",
    description: "Retrieval Augmented Generation, evaluated by Large Langauage Models.",
    image: "/rag-image.png",
    tags: ["RAG", "LLM", "Python", "REST API", "Natural Language Processing", "Word Embeddings"],
    github: "https://github.com/matthewyjiang/ee454-final-project",
    featured: false,
    paper: "/rag-paper.pdf",
    demo: null,
    stars: 0
  },
  {
    title: "Classifying Political Sentiment on Tweet Samples",
    description: "Developed a neural network model based on Recurrent Neural Networks (RNN) with Long Short-Term Memory (LSTM) units using PyTorch to identify biases in tweet content.",
    image: "https://www.mdpi.com/information/information-15-00517/article_deploy/html/images/information-15-00517-g001.png",
    tags: ["RNN", "LSTM", "Machine Learning", "Python", "Natural Language Processing", "Word Embeddings"],
    github: "https://github.com/matthewyjiang/ee467-final-project",
    featured: false,
    paper: "/classifying_political_sentiment_on_tweet_samples.pdf",
    demo: null,
    stars: 0
  },
  {
    title: "Security Camera",
    description: "A home protection system that utilizes the YOLO detection system to determine if a human is in the camera frame.",
    image: "/ee250-demo.png",
    tags: ["YOLO", "OpenCV", "Computer Vision", "IOT", "Raspberry Pi", "Python", "MQTT", "REST API"],
    github: "https://github.com/matthewyjiang/ee250-final-project",
    featured: false,
    paper: "/ee250-project-paper.pdf",
    demo: null,
    stars: 0
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text leading-relaxed">
              Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A collection of my work.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <article 
                key={index}
                className={`bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm ${
                  project.featured ? 'md:col-span-2' : ''
                }`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60" />
                </div>
                
                <div className="p-8 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Star size={16} className="fill-current text-yellow-400" />
                      <span>{project.stars}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      <Github size={20} />
                      <span>Github</span>
                    </a>
                    { project.paper != null && <a
                      href={project.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Read Paper</span>
                    </a>
                    }
                    { project.demo != null && <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-emerald-600 rounded-lg hover:bg-emerald-500 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                    }
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;