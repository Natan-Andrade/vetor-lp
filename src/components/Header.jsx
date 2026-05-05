import React, { useState, useEffect } from 'react';
import { trackWhatsAppClick } from '../utils/analytics';
import CTAButton from './CTAButton';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full max-w-[85rem] mx-auto z-50 transition-all duration-300 border-b border-grid ${scrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-white'}`}>
      <div className="h-16 flex items-center justify-between px-6 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 bg-brand-500 rounded text-white font-bold text-xl leading-none">
            V
          </div>
          <span className="font-semibold text-lg text-zinc-900 tracking-tight">etor</span>
        </div>

        <nav className="hidden md:flex h-full">
          <ul className="flex items-center h-full">
            <li className="h-full border-x border-grid border-l-transparent px-6 flex items-center">
              <a href="#problema" className="text-sm font-medium text-zinc-600 hover:text-brand-500 transition-colors">O Problema</a>
            </li>
            <li className="h-full border-r border-grid px-6 flex items-center">
              <a href="#solucao" className="text-sm font-medium text-zinc-600 hover:text-brand-500 transition-colors">A Solução</a>
            </li>
            <li className="h-full border-r border-grid px-6 flex items-center">
              <a href="#demo" className="text-sm font-medium text-zinc-600 hover:text-brand-500 transition-colors">Como Funciona</a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <CTAButton
            href="https://wa.me/5511999999999"
            variant="primary"
            className="!py-1.5 !px-4 text-sm rounded-md"
            trackingLocation="Header - CTA"
          >
            Falar com consultor
          </CTAButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
