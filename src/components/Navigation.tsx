import { FileText, Folder, Home } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const linkBase = 'flex items-center gap-2 rounded-full px-3 py-1.5 transition-colors';

  return (
    <nav className="fixed left-0 right-0 top-0 z-20 px-3 py-3 sm:px-6">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-[var(--base-800)]/75 px-4 backdrop-blur-xl sm:px-6">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-wide text-[var(--ink-100)] transition hover:text-[var(--sun-400)]"
        >
          <img
            src="/favicon.svg"
            className="h-6 w-auto object-contain pointer-events-none"
            alt="Logo"
          />
          matthew jiang
        </NavLink>

        <div className="flex items-center gap-2 sm:gap-3">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `${linkBase} ${
                isActive
                  ? 'bg-[var(--mint-500)]/20 text-[var(--mint-400)]'
                  : 'text-[var(--ink-200)] hover:bg-white/10 hover:text-[var(--ink-100)]'
              }`
            }
          >
            <Home size={16} />
            <span className="hidden sm:inline">home</span>
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${linkBase} ${
                isActive
                  ? 'bg-[var(--sun-500)]/20 text-[var(--sun-400)]'
                  : 'text-[var(--ink-200)] hover:bg-white/10 hover:text-[var(--ink-100)]'
              }`
            }
          >
            <Folder size={16} />
            <span className="hidden sm:inline">projects</span>
          </NavLink>
          <NavLink
            to="/publications"
            className={({ isActive }) =>
              `${linkBase} ${
                isActive
                  ? 'bg-white/15 text-[var(--ink-100)]'
                  : 'text-[var(--ink-200)] hover:bg-white/10 hover:text-[var(--ink-100)]'
              }`
            }
          >
            <FileText size={16} />
            <span className="hidden sm:inline">publications</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
