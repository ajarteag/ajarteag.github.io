import { ArrowUpRight } from 'lucide-react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Reveal from '../components/Reveal';

const publications = [
  {
    title: 'Safe Reactive Navigation for Granular Terrain Exploration',
    year: '2025',
    authors: ['Matthew Y. Jiang'],
    venue: 'Undergraduate Thesis, University of Southern California',
    link: '/undergraduate_thesis.pdf',
    published: true,
    type: 'Thesis',
  },
  {
    title: 'Safe Active Navigation and Exploration for Planetary Environments Using Proprioceptive Measurements',
    year: '2025',
    authors: ['Matthew Y. Jiang', 'Feifei Qian', 'Shipeng Liu'],
    venue: 'RSS Workshop on Multi-Objective Optimization',
    link: 'https://arxiv.org/abs/2510.19101',
    published: true,
    type: 'Workshop',
  },
];

const Publications = () => {
  const sortedPublications = [...publications].sort((a, b) => Number(b.year) - Number(a.year));

  return (
    <div className="page-noise min-h-screen text-[var(--ink-100)]">
      <Navigation />
      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <Reveal>
          <header className="rounded-3xl border border-white/10 bg-[var(--base-700)]/35 p-8 sm:p-10">
            <h1 className="text-5xl sm:text-6xl">Publications</h1>
          </header>
        </Reveal>

        <section className="mt-10 space-y-4">
          {sortedPublications.map((publication, index) => (
            <Reveal key={publication.title} delayMs={index * 90}>
              <article className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 transition hover:-translate-y-0.5 hover:border-[var(--mint-500)]/35 sm:px-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="min-w-0">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="rounded-full border border-[var(--sun-500)]/40 bg-[var(--sun-500)]/15 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-[var(--sun-400)]">
                        {publication.type}
                      </span>
                      <span className="text-xs text-[var(--ink-300)]">{publication.published ? 'Published' : 'Expected'} {publication.year}</span>
                    </div>
                    <h2 className="text-xl leading-tight text-[var(--ink-100)] sm:text-2xl">{publication.title}</h2>
                    <p className="mt-1 text-sm italic text-[var(--ink-200)]">{publication.venue}</p>
                    <p className="mt-1 text-sm text-[var(--ink-300)]">{publication.authors.join(', ')}</p>
                  </div>

                  {publication.link && (
                    <a
                      href={publication.link}
                      className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-[var(--mint-500)]/40 bg-[var(--mint-500)]/15 px-4 py-2 text-sm text-[var(--ink-100)] transition hover:bg-[var(--mint-500)]/25"
                    >
                      View Publication
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Publications;
