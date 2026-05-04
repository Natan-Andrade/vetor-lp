import React from 'react';
import { trackWhatsAppClick } from '../utils/analytics';

const Footer = () => {
  return (
    <footer className="bg-transparent text-zinc-600 pb-12 pt-16">
      <div className="px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-6 h-6 bg-brand-500 rounded text-white font-bold text-sm leading-none">
                M
              </div>
              <span className="font-semibold text-zinc-900 tracking-tight">marcenaria.app</span>
            </div>
            <p className="text-xs max-w-xs leading-relaxed">
              O ecossistema definitivo para gestão de pequenas e médias marcenarias. Código limpo, interface elegante, gestão sem atrito.
            </p>
          </div>
          
          <div>
            <h4 className="text-zinc-900 font-semibold mb-4 text-sm uppercase tracking-wider">Produto</h4>
            <ul className="space-y-3 text-xs font-medium">
              <li><a href="#demo" className="hover:text-brand-500 transition-colors">Como funciona</a></li>
              <li><a href="#benefits" className="hover:text-brand-500 transition-colors">Benefícios</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Preços</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-900 font-semibold mb-4 text-sm uppercase tracking-wider">Contato</h4>
            <ul className="space-y-3 text-xs font-medium">
              <li>
                <a 
                  href="https://wa.me/5511999999999" 
                  onClick={() => trackWhatsAppClick('Footer')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-500 transition-colors"
                >
                  Falar com Comercial
                </a>
              </li>
              <li><a href="mailto:contato@marcenaria.app" className="hover:text-brand-500 transition-colors">contato@marcenaria.app</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-grid text-xs flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} marcenaria.app. Projetado para a perfeição.</p>
          <div className="flex gap-6 font-medium">
            <a href="#" className="hover:text-brand-500 transition-colors">Termos de uso</a>
            <a href="#" className="hover:text-brand-500 transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
