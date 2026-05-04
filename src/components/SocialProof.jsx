import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Carlos Roberto",
    role: "Marcenaria Silva",
    text: "Antes eu perdia horas procurando medidas no WhatsApp. Agora abro o sistema e está tudo lá, organizado por cliente. Mudou minha rotina.",
    initials: "CR"
  },
  {
    name: "Marcos Vinícius",
    role: "MV Móveis",
    text: "O visual é tão limpo que até meus funcionários conseguem usar. Reduzimos os erros de corte em 80%.",
    initials: "MV"
  },
  {
    name: "Ana Paula",
    role: "AP Projetos",
    text: "Consegui pegar 3 projetos a mais esse mês só pelo tempo que economizei com a gestão de orçamentos.",
    initials: "AP"
  }
];

const SocialProof = () => {
  return (
    <section className="border-b border-grid bg-transparent overflow-hidden">
      <div className="p-6 sm:p-8 lg:p-12 text-center max-w-2xl mx-auto border-b border-dashed border-grid">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-500 text-xs font-semibold uppercase tracking-wider mb-2"
        >
          Depoimentos
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight"
        >
          Validação no mundo real
        </motion.h2>
      </div>

      <div className="w-full">
        {/* Scroll snap container on mobile, grid on desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-3 md:overflow-visible md:divide-x divide-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-[85vw] shrink-0 snap-center md:w-auto p-8 lg:p-10 hover:bg-zinc-50/50 transition-colors flex flex-col h-full relative border-r border-dashed border-zinc-200 md:border-r-0"
            >
              <div className="absolute top-4 right-6 text-6xl text-zinc-100 font-serif leading-none opacity-50 select-none">"</div>
              
              <p className="text-zinc-600 text-sm leading-relaxed flex-1 mb-8 relative z-10 font-medium">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3 mt-auto relative z-10">
                <div className="w-8 h-8 bg-brand-50 text-brand-600 flex items-center justify-center font-bold text-xs shadow-[2px_2px_0_0_rgba(255,45,32,0.2)]">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 text-xs">{testimonial.name}</h4>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
