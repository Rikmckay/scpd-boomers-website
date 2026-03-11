import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import siteConfig from '../data/siteConfig.json';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/events', label: 'Events' },
  { to: '/board', label: 'Board Members' },
  { to: '/membership', label: 'Membership' },
  { to: '/flyer', label: 'Current Flyer' },
  { to: '/bylaws', label: 'Bylaws' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-dark-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-gold-400 font-bold text-lg no-underline">
            <span className="text-2xl">🎶</span>
            <span>{siteConfig.clubName}</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded text-sm font-medium no-underline transition-colors ${
                    isActive
                      ? 'bg-gold-500 text-dark-900'
                      : 'text-gray-300 hover:text-gold-400 hover:bg-dark-700'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded text-gray-300 hover:text-gold-400 hover:bg-dark-700 border-none bg-transparent cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 border-t border-dark-700">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded text-sm font-medium no-underline transition-colors ${
                    isActive
                      ? 'bg-gold-500 text-dark-900'
                      : 'text-gray-300 hover:text-gold-400 hover:bg-dark-700'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
