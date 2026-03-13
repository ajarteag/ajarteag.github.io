import { ArrowUpRight, FileText, Github, Linkedin, Rocket, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

function Home() {
  const featuredLinks = [
    {
      title: 'My Medium Site',
      description: 'Practical notes on robotics, software craft, and student engineering leadership.',
      image:
        'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*GbTb20qGI40kJW880gQwyA.jpeg',
      url: 'https://medium.matthewyjiang.com',
      badge: 'Writing',
    },
    {
      title: 'USC AUV',
      description: 'A competition-ready autonomous underwater platform built for RoboSub.',
      image: '/auv-website.png',
      url: 'https://uscfrl.com',
      badge: 'Team Project',
    },
    {
      title: 'RoboLAND',
      description: 'Locomotion and navigation research around robust terrain-aware autonomy.',
      image: '/robot-image.png',
      url: 'https://sites.google.com/usc.edu/roboland',
      badge: 'Research',
    },
    {
      title: 'Undergraduate Thesis',
      description: 'Safe reactive navigation for granular terrain exploration and deployment tradeoffs.',
      image:
        'https://plus.unsplash.com/premium_photo-1683749808307-e5597ac69f1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA',
      url: '/undergraduate_thesis.pdf',
      badge: 'Publication',
    },
  ];

  const skills = ['Linux', 'Docker', 'ROS', 'C', 'C++', 'Python', 'Verilog', 'Git'];

  return (
    <div className="page-noise min-h-screen text-[var(--ink-100)]">
      <Navigation />
      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <Reveal>
          <section className="grid gap-10 lg:grid-cols-5 lg:items-center">
          <div className="lg:col-span-3">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--sun-400)]/40 bg-[var(--sun-400)]/10 px-4 py-1 text-sm text-[var(--ink-200)]">
              <Sparkles size={14} />
              planetary mobility + robust autonomy
            </div>
            <h1 className="text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">Matthew Jiang</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ink-200)] sm:text-xl">
              Graduate Researcher, Lunar Lab
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/matthewyjiang"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--mint-500)]/40 bg-[var(--mint-500)]/15 px-5 py-2.5 text-sm font-medium text-[var(--ink-100)] transition hover:-translate-y-0.5 hover:bg-[var(--mint-500)]/25"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/matthewyjiang"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-[var(--ink-100)] transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href="/cv.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--sun-500)]/40 bg-[var(--sun-500)]/15 px-5 py-2.5 text-sm font-medium text-[var(--ink-100)] transition hover:-translate-y-0.5 hover:bg-[var(--sun-500)]/25"
              >
                <FileText size={16} />
                Resume
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-[var(--base-700)]/45 p-5 shadow-2xl shadow-[var(--mint-500)]/10">
              <img
                src="/kermit.png"
                alt="Matthew Jiang"
                className="aspect-square w-full rounded-2xl object-cover"
              />
              <div className="mt-4 flex items-center justify-between text-sm text-[var(--ink-200)]">
                <span className="inline-flex items-center gap-2">
                  <Rocket size={14} />
                  Robotics @ Georgia Tech
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--mint-400)]">ATL</span>
              </div>
            </div>
          </div>
          </section>
        </Reveal>

        <section className="mt-14 grid gap-6 md:grid-cols-3">
          <Reveal delayMs={70} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-black/15 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--ink-300)]">Background</p>
            <p className="mt-3 text-[var(--ink-200)]">
              M.S. Robotics at Georgia Tech; B.S. in Computer Engineering and Computer Science from USC.
            </p>
            </article>
          </Reveal>
          <Reveal delayMs={130} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-black/15 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--ink-300)]">Current Role</p>
            <p className="mt-3 text-[var(--ink-200)]">
              Graduate researcher at Georgia Tech's Lunar Lab, building autonomy systems for planetary and field robotics.
            </p>
            </article>
          </Reveal>
          <Reveal delayMs={190} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-black/15 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--ink-300)]">Focus</p>
            <p className="mt-3 text-[var(--ink-200)]">
              Planetary mobility, terrain-aware navigation, and reliable autonomy pipelines that transfer from simulation to deployment.
            </p>
            </article>
          </Reveal>
        </section>

        <Reveal delayMs={120}>
          <section className="mt-16 grid gap-6 lg:grid-cols-12">
            <article className="rounded-3xl border border-white/10 bg-[var(--base-700)]/35 p-7 lg:col-span-5">
            <h2 className="text-3xl">Skills</h2>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[var(--mint-400)]/30 bg-[var(--mint-400)]/10 px-3 py-1 text-sm text-[var(--mint-400)]"
                >
                  {skill}
                </span>
              ))}
            </div>
            </article>

            <article className="rounded-3xl border border-white/10 bg-[var(--base-700)]/35 p-7 lg:col-span-7">
            <h2 className="text-3xl">Featured Projects</h2>
            <div className="mt-5 space-y-4">
              <a
                href="https://uscfrl.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-[var(--mint-500)]/40"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl group-hover:text-[var(--mint-400)]">Barracuda</h3>
                  <ArrowUpRight size={16} className="text-[var(--ink-300)] group-hover:text-[var(--mint-400)]" />
                </div>
                <p className="mt-2 text-sm text-[var(--ink-200)]">
                  USC AUV: fully autonomous underwater vehicle designed for the RoboSub competition.
                </p>
              </a>
              <a
                href="https://github.com/matthewyjiang/project-wumbo"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-[var(--sun-500)]/40"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl group-hover:text-[var(--sun-400)]">Project Wumbo</h3>
                  <ArrowUpRight size={16} className="text-[var(--ink-300)] group-hover:text-[var(--sun-400)]" />
                </div>
                <p className="mt-2 text-sm text-[var(--ink-200)]">
                  1st place winner at USC IEEE Hack IOT with a rapid hardware-software prototype.
                </p>
              </a>
            </div>
            </article>
          </section>
        </Reveal>

        <Reveal delayMs={140}>
          <section className="mt-16">
          <h2 className="text-4xl">Featured Links</h2>
          <p className="mt-3 max-w-2xl text-[var(--ink-200)]">
            A mix of writing, team efforts, and research work that captures where I spend most of my creative energy.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {featuredLinks.map((link) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/20 transition hover:-translate-y-1 hover:border-[var(--mint-500)]/30"
              >
                <img src={link.image} alt={link.title} className="h-40 w-full object-cover" />
                <div className="flex h-full flex-col p-5">
                  <span className="w-fit rounded-full bg-white/10 px-2.5 py-1 text-xs uppercase tracking-wide text-[var(--ink-300)]">
                    {link.badge}
                  </span>
                  <h3 className="mt-3 text-2xl leading-tight group-hover:text-[var(--mint-400)]">{link.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--ink-200)]">{link.description}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm text-[var(--ink-300)] group-hover:text-[var(--mint-400)]">
                    Explore
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </a>
            ))}
          </div>
          </section>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
