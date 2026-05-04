import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Users, Clock } from 'lucide-react';

const features = [
  {
    icon: <LayoutDashboard className="w-4 h-4 sm:w-5 sm:h-5 text-brand-500" />,
    title: "Controle Central",
    description: "Pipeline visual do orçamento à entrega final."
  },
  {
    icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-brand-500" />,
    title: "Status Real",
    description: "Identifique gargalos de produção rapidamente."
  },
  {
    icon: <Users className="w-4 h-4 sm:w-5 sm:h-5 text-brand-500" />,
    title: "CRM Integrado",
    description: "Tenha todo o histórico do cliente em um clique."
  }
];

const Solution = () => {
  return (
    <section className="sm:border-b border-grid bg-transparent">
      <div className="grid xl:grid-cols-2 divide-y sm:divide-y-0 xl:divide-x divide-grid">
        
        {/* Visual Component Area */}
        <div className="p-4 sm:p-8 lg:p-16 bg-zinc-50/50 flex items-center justify-center relative overflow-hidden order-last xl:order-first border-t border-grid sm:border-t-0">
          {/* Dashed Grid Overlay for Blueprint feel */}
          <div className="absolute inset-0 pointer-events-none opacity-40 border-r border-dashed border-grid"
               style={{ backgroundImage: 'linear-gradient(to right, #e4e4e7 1px, transparent 1px), linear-gradient(to bottom, #e4e4e7 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-lg relative z-10"
          >
            <div className="bg-white border border-zinc-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              {/* Toolbar */}
              <div className="h-8 sm:h-10 border-b border-zinc-200 flex items-center px-3 sm:px-4 justify-between bg-zinc-50">
                <div className="text-[10px] sm:text-xs font-medium text-zinc-500">Pipeline de Produção</div>
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-zinc-300 rounded-full"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-zinc-300 rounded-full"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-zinc-300 rounded-full"></div>
                </div>
              </div>

              {/* Kanban Grid */}
              <div className="grid grid-cols-2 divide-x divide-zinc-200 p-2 sm:p-4 gap-2 sm:gap-0">
                {/* Column 1 */}
                <div className="space-y-2 sm:space-y-3 pr-2 sm:pr-4">
                  <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-4">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-400"></span>
                    <span className="text-[9px] sm:text-[10px] font-semibold text-zinc-700 uppercase tracking-wide">Orçamento</span>
                  </div>
                  
                  <div className="border border-zinc-200 p-2 sm:p-3 bg-white shadow-sm hover:border-brand-300 transition-colors cursor-default">
                    <div className="text-[9px] sm:text-xs font-mono text-zinc-400 mb-0.5 sm:mb-1">#ORD-092</div>
                    <div className="text-[10px] sm:text-sm font-medium text-zinc-900 leading-tight">Armário Embutido</div>
                    <div className="text-[8px] sm:text-xs text-zinc-500 mt-1 sm:mt-2">Cliente: Carlos R.</div>
                  </div>
                  
                  <div className="border border-zinc-200 p-2 sm:p-3 bg-white shadow-sm hover:border-brand-300 transition-colors cursor-default">
                    <div className="text-[9px] sm:text-xs font-mono text-zinc-400 mb-0.5 sm:mb-1">#ORD-093</div>
                    <div className="text-[10px] sm:text-sm font-medium text-zinc-900 leading-tight">Mesa Escritório</div>
                    <div className="text-[8px] sm:text-xs text-zinc-500 mt-1 sm:mt-2">Cliente: Ana P.</div>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-2 sm:space-y-3 pl-2 sm:pl-4">
                  <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-4">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-500"></span>
                    <span className="text-[9px] sm:text-[10px] font-semibold text-zinc-700 uppercase tracking-wide">Produção</span>
                  </div>
                  
                  <div className="border border-dashed border-brand-300 bg-brand-50/50 p-2 sm:p-3 relative">
                    <div className="absolute top-0 left-0 w-0.5 sm:w-1 h-full bg-brand-500"></div>
                    <div className="text-[9px] sm:text-xs font-mono text-zinc-400 mb-0.5 sm:mb-1">#ORD-091</div>
                    <div className="text-[10px] sm:text-sm font-medium text-zinc-900 leading-tight">Cozinha Completa</div>
                    <div className="text-[8px] sm:text-xs text-zinc-500 mt-1 sm:mt-2">Cliente: João S.</div>
                    
                    <div className="mt-2 sm:mt-3">
                      <div className="flex justify-between text-[8px] sm:text-[10px] text-zinc-500 mb-1">
                        <span>Progresso</span>
                        <span>80%</span>
                      </div>
                      <div className="h-0.5 sm:h-1 w-full bg-zinc-200 overflow-hidden">
                        <div className="h-full bg-brand-500 w-[80%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Text Content Area */}
        <div className="p-5 sm:p-8 lg:p-16 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-brand-500 text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-2 sm:mb-3">A Solução</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-4 sm:mb-6 tracking-tight">
              Organização <br className="hidden sm:block"/>estrutural.
            </h2>
            <p className="text-zinc-600 mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base">
              O ecossistema perfeito para gerenciar projetos. Menos planilhas, mais controle sobre o chão de fábrica e faturamento.
            </p>

            {/* Mobile Grid instead of pure stack! */}
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 relative">
              {/* Connecting dashed line behind icons on desktop */}
              <div className="absolute top-4 bottom-4 left-4 w-px border-l border-dashed border-zinc-200 -z-10 hidden sm:block"></div>
              
              {/* Force grid layout on mobile too for features */}
              <div className="grid grid-cols-2 gap-4 sm:block sm:space-y-8">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex flex-col sm:flex-row gap-3 sm:gap-4 relative bg-white ${index === 2 ? 'col-span-2 sm:col-span-1 flex-row' : ''}`}
                  >
                    <div className="flex-shrink-0 w-8 h-8 sm:w-8 sm:h-8 rounded-sm border border-zinc-200 bg-zinc-50 flex items-center justify-center relative z-10 shadow-sm">
                      {feature.icon}
                    </div>
                    <div className="pt-0.5 sm:pt-1">
                      <h3 className="text-xs sm:text-sm font-bold text-zinc-900 mb-0.5 sm:mb-1">{feature.title}</h3>
                      <p className="text-[10px] sm:text-sm text-zinc-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Solution;
