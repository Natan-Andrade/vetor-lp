import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import CTAButton from './CTAButton';

const Hero = () => {
  return (
    <section className="relative sm:border-b border-grid overflow-hidden bg-transparent">
      <div className="grid grid-cols-12 lg:grid-cols-2 sm:divide-x divide-grid">

        {/* Left Content Area */}
        <div className="col-span-12 lg:col-span-1 px-5 pt-12 pb-8 sm:py-20 lg:py-32 lg:px-12 relative z-20 flex flex-col justify-center bg-transparent">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-white/90 border border-zinc-200 text-zinc-600 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-6 sm:mb-8 shadow-sm">
              <span className="flex h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse"></span>
              Sob Medida
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.05] mb-4 sm:mb-6">
              O fim da<br />
              <span className="text-brand-500">desorganização</span>
            </h1>

            <p className="text-sm sm:text-lg text-zinc-700 mb-8 sm:mb-10 max-w-lg leading-relaxed">
              Transforme o caos em previsibilidade. Entregamos uma <strong>Landing Page pronta</strong> para captar clientes na internet e um <strong>Sistema de Gestão</strong> robusto para centralizar orçamentos, projetos e produção em um só lugar.
            </p>

            {/* Buttons */}
            <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2 sm:gap-4">
              <CTAButton
                href="https://wa.me/5511945235279?text=Ol%C3%A1%2C%20vim%20pelo%20site%20sistemavetor.com.br%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento"
                trackingLocation="Hero - WhatsApp"
                className="col-span-2 sm:col-span-1 rounded-sm !px-4 !py-3 font-bold uppercase tracking-wide text-xs sm:text-sm"
              >
                Solicitar Orçamento <ArrowRight className="w-4 h-4 ml-1" />
              </CTAButton>
              <CTAButton
                href="#demo"
                variant="secondary"
                trackingLocation="Hero - Demo"
                className="col-span-2 sm:col-span-1 rounded-sm !px-4 !py-3 font-bold uppercase tracking-wide text-xs sm:text-sm bg-white/90"
              >
                Ver demonstração
              </CTAButton>
            </div>
          </motion.div>
        </div>

        {/* Right Visual Area */}
        <div className="col-span-12 lg:col-span-1 relative flex items-center justify-center p-5 sm:p-12 lg:p-16 overflow-hidden border-t border-grid sm:border-t-0 mt-4 sm:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-lg relative z-10"
          >
            {/* Laravel style dark terminal block */}
            <div className="bg-[#18181b] rounded-sm shadow-2xl overflow-hidden border border-zinc-700 relative">
              {/* Fake Window Header */}
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 border-b border-zinc-800 bg-[#0f0f11]">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-zinc-700"></div>
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-zinc-700"></div>
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-zinc-700"></div>
                <div className="ml-auto text-[9px] sm:text-[10px] text-zinc-500 flex items-center gap-2">
                  <span className="text-brand-500 font-bold">~</span>/vetor/projeto
                </div>
              </div>

              {/* Fake Code / Dashboard area */}
              <div className="p-4 sm:p-6 text-[10px] sm:text-xs leading-relaxed text-zinc-400 overflow-x-auto hide-scrollbar">
                <div><span className="text-brand-400">import</span> <span className="text-blue-300">Workspace</span> <span className="text-brand-400">from</span> <span className="text-green-300">'@vetor/gestao'</span>;</div>
                <div className="mt-3 sm:mt-4"><span className="text-brand-400">const</span> projeto = <span className="text-blue-300">Workspace</span>.build(&#123;</div>
                <div className="pl-4">client: <span className="text-green-300">'João Silva'</span>,</div>
                <div className="pl-4">type:   <span className="text-green-300">'Cozinha Planejada'</span>,</div>
                <div className="pl-4">status: <span className="text-yellow-300">'Em Produção'</span>,</div>
                <div className="pl-4">deadline:<span className="text-green-300">'15/10/2026'</span></div>
                <div>&#125;);</div>

                <div className="mt-5 sm:mt-6 flex items-center gap-3">
                  <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "65%" }}
                      transition={{ delay: 1, duration: 1.5 }}
                      className="h-full bg-brand-500"
                    ></motion.div>
                  </div>
                  <span className="text-zinc-500 text-[9px] sm:text-[10px] font-bold">65%</span>
                </div>
              </div>
            </div>

            {/* Floating Element */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -right-2 sm:-right-6 -bottom-4 sm:-bottom-6 bg-white border border-dashed border-zinc-300 p-2 sm:p-3 rounded-sm shadow-lg sm:shadow-xl flex items-center gap-2 sm:gap-3"
            >
              <div className="w-5 h-5 sm:w-8 sm:h-8 rounded bg-brand-50 border border-brand-100 text-brand-500 flex items-center justify-center font-bold text-[10px] sm:text-xs">✓</div>
              <div>
                <div className="text-[9px] sm:text-[10px] font-bold text-zinc-900 uppercase">Orçamento OK</div>
                <div className="text-[8px] sm:text-[9px] text-zinc-500">Há 5 minutos</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
