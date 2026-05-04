import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, FileQuestion, AlertCircle } from 'lucide-react';

const problems = [
  {
    icon: <MessageCircle className="w-5 h-5 text-brand-500" />,
    title: "Comunicação dispersa",
    description: "Orçamentos e medidas importantes se perdem em meio a mensagens pessoais no WhatsApp."
  },
  {
    icon: <FileQuestion className="w-5 h-5 text-brand-500" />,
    title: "Processos manuais",
    description: "Anotações em papel e planilhas desconectadas causam desorganização e perda de informações vitais."
  },
  {
    icon: <AlertCircle className="w-5 h-5 text-brand-500" />,
    title: "Retrabalho frequente",
    description: "Falta de centralização de dados gera cortes errados, atrasos na produção e margens reduzidas."
  }
];

const Problem = () => {
  return (
    <section className="border-b border-grid bg-transparent relative overflow-hidden">
      <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-grid">
        
        {/* Header Column */}
        <div className="lg:col-span-4 p-6 sm:p-8 lg:p-12 flex flex-col justify-center bg-zinc-50/50">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-brand-500 text-xs font-semibold uppercase tracking-wider mb-2">O Problema</div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4 tracking-tight">
              O custo da <span className="text-brand-500">bagunça</span>
            </h2>
            <p className="text-zinc-600 text-sm leading-relaxed">
              O trabalho manual e ferramentas improvisadas são os maiores inimigos da escala em marcenarias. Identifique se sua operação sofre desses gargalos.
            </p>
          </motion.div>
        </div>

        {/* Content Column - Swipeable Carousel on Mobile */}
        <div className="lg:col-span-8 w-full overflow-hidden">
          {/* We use a scroll snap container for mobile, and grid for desktop */}
          <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar sm:grid sm:grid-cols-3 sm:overflow-visible sm:divide-x sm:divide-dashed divide-zinc-200 h-full">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-[85vw] shrink-0 snap-center sm:w-auto p-8 sm:p-8 lg:p-10 flex flex-col hover:bg-zinc-50/50 transition-colors border-r border-dashed border-zinc-200 sm:border-r-0"
              >
                <div className="w-10 h-10 border border-zinc-200 bg-white flex items-center justify-center mb-6 shadow-[4px_4px_0_0_rgba(228,228,231,1)]">
                  {problem.icon}
                </div>
                <h3 className="text-base font-semibold text-zinc-900 mb-3">{problem.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Problem;
