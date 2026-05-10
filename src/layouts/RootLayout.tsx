import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';

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
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto bg-surface/80 backdrop-blur-md border-b border-outline/30 shadow-sm">
        <NavLink to="/" className="font-headline-md text-secondary font-bold tracking-tighter">
          XLABS
        </NavLink>

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

        <a href="mailto:info@xlabsghana.com" className="hidden md:block">
          <Button variant="secondary" className="font-label-md uppercase tracking-wider scale-95 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
            Request Deck →
          </Button>
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
          <a href="mailto:info@xlabsghana.com" className="mt-8 w-full block">
            <Button variant="secondary" className="font-label-md uppercase tracking-wider w-full py-6">
              Request Deck →
            </Button>
          </a>
        </div>
      )}
    </>
  );
};

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest text-secondary font-body-md border-t-2 border-secondary/20 w-full mt-auto py-12 px-gutter z-10 relative">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-between">
          <div>
            <span className="font-headline-sm text-on-surface font-bold block mb-2">XLABS Ghana — Fintech Hub Division</span>
            <p className="text-on-surface-variant text-sm mb-1">Series A · $1B · 2026</p>
            <p className="text-on-surface-variant text-sm mb-1">Academic Partners: MIT RAISE · COMPSSA</p>
            <p className="text-on-surface-variant text-sm mt-4">
              <a href="mailto:info@xlabsghana.com" className="hover:text-secondary underline decoration-secondary/50 transition-opacity duration-200">
                info@xlabsghana.com
              </a>
            </p>
          </div>
        </div>
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