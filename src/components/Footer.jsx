import React from 'react';
import { trackWhatsAppClick } from '../utils/analytics';

const Footer = () => {
  return (
    <footer className="bg-transparent text-zinc-600 pb-12 pt-16">
      <div className="px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
          <div>
            <div className="flex items-center gap-0.5 mb-4">
              <div className="flex items-center justify-center w-6 h-6 bg-brand-500 rounded text-white font-bold text-sm leading-none">
                V
              </div>
              <span className="font-semibold text-zinc-900 tracking-tight">etor</span>
            </div>
            <p className="text-xs max-w-xs leading-relaxed">
              Desenvolvemos sistemas de gestão e landing pages sob medida para marcenarias. Cada projeto é único, assim como o seu negócio.
            </p>
          </div>

          <a
            href="https://wa.me/5511945235279?text=Ol%C3%A1%2C%20vim%20pelo%20site%20sistemavetor.com.br%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento"
            onClick={() => trackWhatsAppClick('Footer')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-brand-500 hover:bg-brand-600 rounded-md transition-colors shadow-sm"
          >
            Solicitar Orçamento
          </a>
        </div>

        <div className="pt-8 border-t border-grid text-xs flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Vetor - Projetado para o seu negócio.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
