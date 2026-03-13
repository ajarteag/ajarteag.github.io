import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mx-auto mt-16 w-full max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/20 px-5 py-6 md:flex-row">
          <p className="text-sm text-[var(--ink-300)]">© {new Date().getFullYear()} Matthew Y Jiang. All rights reserved.</p>
          <a
            href="mailto:matthewjiang@gatech.edu"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-[var(--ink-200)] transition hover:text-[var(--mint-400)]"
          >
            <Mail size={16} />
            matthewjiang [at] gatech [dot] edu
          </a>
      </div>
    </footer>
  );
};

export default Footer;
