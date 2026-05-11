import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const TopNavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Thesis', path: '/thesis' },
    { name: 'Products', path: '/products' },
    { name: 'Architecture', path: '/architecture' },
    { name: 'Capital', path: '/capital' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'Founders', path: '/founders' },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm">
        <div className="font-headline-md text-secondary font-bold tracking-tighter">
          XLABS
        </div>

        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-body-md text-label-md uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'text-secondary border-b-2 border-secondary pb-1'
                    : 'text-on-surface-variant hover:text-secondary'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <a href="mailto:info@xlabsghana.com" className="hidden md:block bg-secondary-container text-primary-container px-6 py-2 rounded font-label-md uppercase tracking-wider hover:bg-secondary transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] scale-95 active:opacity-80 transition-transform">
          Request Deck
        </a>

        <button
          className="md:hidden text-secondary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md pt-24 px-gutter flex flex-col gap-6 md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `font-headline-md text-xl uppercase tracking-wider ${
                  isActive ? 'text-secondary' : 'text-on-surface'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a href="mailto:info@xlabsghana.com" className="mt-8 bg-secondary-container text-primary-container px-6 py-4 rounded font-label-md uppercase tracking-wider w-full text-center">
            Request Deck
          </a>
        </div>
      )}
    </>
  );
};

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest text-secondary font-body-md border-t-2 border-secondary/20 w-full mt-auto py-12 px-gutter max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 z-10 relative">
      <div className="col-span-1 md:col-span-1 flex flex-col justify-between">
        <div>
          <span className="font-headline-sm text-on-surface font-bold block mb-4">XLABS Ghana — Fintech Hub Division</span>
          <p className="text-on-surface-variant text-sm">
            Series A · $1B · 2026
          </p>
        </div>
        <div className="font-body-md text-body-md text-on-surface-variant text-sm mt-4 md:mt-0">
          info@xlabsghana.com
        </div>
      </div>

      <div className="col-span-1 md:col-span-3 flex flex-wrap gap-x-8 gap-y-4 justify-start md:justify-end items-end">
        <span className="font-body-md text-body-md text-on-surface-variant">Academic Partners: MIT RAISE · COMPSSA</span>
      </div>
    </footer>
  );
};

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen relative dark kente-bg selection:bg-secondary-container selection:text-on-secondary-container">
      {/* Universal Background Pattern */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-container/20 to-background/90 mix-blend-overlay opacity-50"></div>
      </div>

      <TopNavBar />

      <div className="flex-grow flex flex-col w-full relative z-10">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;