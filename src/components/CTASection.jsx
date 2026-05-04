import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CTAButton from './CTAButton';

const CTASection = () => {
  return (
    <section className="border-b border-grid relative overflow-hidden bg-transparent">
      {/* Blueprint grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40"
           style={{ backgroundImage: 'linear-gradient(to right, #e4e4e7 1px, transparent 1px), linear-gradient(to bottom, #e4e4e7 1px, transparent 1px)', backgroundSize: '48px 48px' }}>
      </div>

      <div className="p-12 lg:p-24 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl bg-white/80 backdrop-blur-md p-8 border border-zinc-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
        >
          <div className="w-12 h-1 bg-brand-500 mx-auto mb-6"></div>
          <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
            Pronto para transformar sua marcenaria?
          </h2>
          <p className="text-zinc-600 text-sm mb-8">
            Abandone os métodos antigos. Comece a usar a ferramenta definitiva para gestão de marcenarias hoje mesmo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              href="https://wa.me/5511999999999?text=Quero%20solicitar%20uma%20demonstração%20do%20sistema!" 
              variant="primary"
              className="px-8"
              trackingLocation="Bottom CTA - Primary"
            >
              Começar Agora <ArrowRight className="w-4 h-4 ml-1" />
            </CTAButton>
            
            <CTAButton 
              href="#demo"
              variant="secondary"
              trackingLocation="Bottom CTA - Saiba Mais"
            >
              Ver documentação
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
