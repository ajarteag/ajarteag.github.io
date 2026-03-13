import { ArrowUpRight, ExternalLink, Github, Star } from 'lucide-react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Reveal from '../components/Reveal';

const projects = [
  {
    title: 'Barracuda AUV',
    description:
      'Developing a brand new submarine called Barracuda with the USC AUV Design Team while leading software architecture and integration.',
    image: '/mantaray.jpg',
    tags: [
      'ROS',
      'Robotics',
      'AUV',
      'ROV',
      'C++',
      'Python',
      'Docker',
      'Kubernetes',
    ],
    github: 'https://github.com/usc-robosub',
    featured: true,
    paper: null,
    demo: null,
    stars: 0,
  },
  {
    title: 'USC AUV Website',
    description:
      'A team website built with Vite, React, and TypeScript, including Google Calendar API integration for continuously updated events.',
    image: '/auv-website.png',
    tags: [
      'Vite',
      'TypeScript',
      'Node.js',
      'React',
      'HTML',
      'CSS',
      'Tailwind',
      'API',
    ],
    github: 'https://github.com/usc-robosub/usc-robosub.github.io',
    featured: false,
    paper: null,
    demo: 'https://uscfrl.com',
    stars: 0,
  },
  {
    title: 'Project Wumbo',
    description:
      'Wumbo is a rhythm game controlled by a cardboard guitar and display system; it won 1st place at the 2024 IEEE IOT Hackathon.',
    image:
      'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/842/449/datas/original.jpg',
    tags: ['ESP32', 'IOT', 'MIDI', 'SDL', 'Python', 'C', 'C++'],
    github: 'https://github.com/matthewyjiang/project-wumbo',
    featured: false,
    paper: null,
    demo: null,
    stars: 0,
  },
  {
    title: 'Verilog CNN',
    description: 'A convolutional neural network implemented in SystemVerilog for hardware-focused ML experimentation.',
    image:
      'https://saturncloud.io/images/blog/a-comprehensive-guide-to-convolutional-neural-networks-the-eli5-way.webp',
    tags: [
      'Verilog',
      'SystemVerilog',
      'Modelsim',
      'Machine Learning',
      'CNN',
      'Neural Networks',
      'HDL',
    ],
    github: 'https://github.com/matthewyjiang/ee454-final-project',
    featured: false,
    paper: null,
    demo: null,
    stars: 0,
  },
  {
    title: 'RAG',
    description: 'Retrieval-augmented generation evaluated with large language models on quality and retrieval relevance.',
    image: '/rag-image.png',
    tags: [
      'RAG',
      'LLM',
      'Python',
      'REST API',
      'Natural Language Processing',
      'Word Embeddings',
    ],
    github: 'https://github.com/matthewyjiang/ee454-final-project',
    featured: false,
    paper: '/rag-paper.pdf',
    demo: null,
    stars: 0,
  },
  {
    title: 'Classifying Political Sentiment on Tweet Samples',
    description:
      'Developed an RNN/LSTM-based PyTorch pipeline to identify sentiment and bias patterns in curated tweet datasets.',
    image:
      'https://www.mdpi.com/information/information-15-00517/article_deploy/html/images/information-15-00517-g001.png',
    tags: [
      'RNN',
      'LSTM',
      'Machine Learning',
      'Python',
      'Natural Language Processing',
      'Word Embeddings',
    ],
    github: 'https://github.com/matthewyjiang/ee467-final-project',
    featured: false,
    paper: '/classifying_political_sentiment_on_tweet_samples.pdf',
    demo: null,
    stars: 0,
  },
  {
    title: 'Security Camera',
    description:
      'A home protection stack using YOLO-based detection to identify people in frame and trigger downstream automation.',
    image: '/ee250-demo.png',
    tags: [
      'YOLO',
      'OpenCV',
      'Computer Vision',
      'IOT',
      'Raspberry Pi',
      'Python',
      'MQTT',
      'REST API',
    ],
    github: 'https://github.com/matthewyjiang/ee250-final-project',
    featured: false,
    paper: '/ee250-project-paper.pdf',
    demo: null,
    stars: 0,
  },
];

const Projects = () => {
  return (
    <div className="page-noise min-h-screen text-[var(--ink-100)]">
      <Navigation />

      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <Reveal className="mb-14">
          <div className="rounded-3xl border border-white/10 bg-[var(--base-700)]/35 p-8 sm:p-10">
            <h1 className="text-5xl sm:text-6xl">Projects</h1>
          </div>
        </Reveal>

        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delayMs={index * 80} className={`${project.featured ? 'md:col-span-2' : ''} h-full`}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-black/20 transition hover:-translate-y-1 hover:border-[var(--mint-500)]/35">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--base-900)]/85 via-[var(--base-900)]/30 to-transparent" />
                  {project.featured && (
                    <span className="absolute left-4 top-4 rounded-full border border-[var(--sun-400)] bg-[var(--base-900)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--sun-400)] shadow-lg">
                      Featured
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <h2 className="text-3xl leading-tight">{project.title}</h2>
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-[var(--ink-300)]">
                      <Star size={12} className="text-[var(--sun-400)]" />
                      {project.stars}
                    </span>
                  </div>

                  <p className="text-[var(--ink-200)]">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={`${project.title}-${tag}`}
                        className="rounded-full border border-[#66d5b580] bg-[#66d5b54d] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#d9fff4]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3 md:mt-auto md:pt-8">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-[var(--ink-100)] transition hover:border-[var(--mint-500)]/40 hover:text-[var(--mint-400)]"
                    >
                      <Github size={16} />
                      GitHub
                      <ArrowUpRight size={14} />
                    </a>
                    {project.paper && (
                      <a
                        href={project.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[var(--sun-500)]/40 bg-[var(--sun-500)]/15 px-4 py-2 text-sm text-[var(--ink-100)] transition hover:bg-[var(--sun-500)]/25"
                      >
                        <ExternalLink size={16} />
                        Read Paper
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[var(--mint-500)]/40 bg-[var(--mint-500)]/15 px-4 py-2 text-sm text-[var(--ink-100)] transition hover:bg-[var(--mint-500)]/25"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
