import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Zap, DollarSign } from 'lucide-react';

const benefits = [
  {
    title: "Organização",
    description: "Cada projeto e orçamento tem seu lugar definido. Diga adeus à bagunça de papéis e planilhas.",
    icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
  },
  {
    title: "Menos Erros",
    description: "Medidas e prazos centralizados. Evite cortes errados ou atrasos.",
    icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
  },
  {
    title: "Mais Profissional",
    description: "Envie orçamentos em PDF e impressione clientes.",
    icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
  },
  {
    title: "Mais Lucro",
    description: "Menos desperdício e mais tempo livre para novos projetos.",
    icon: <DollarSign className="w-4 h-4 sm:w-5 sm:h-5" />
  }
];

const Benefits = () => {
  return (
    <section className="border-b border-grid bg-transparent text-zinc-900">
      <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-grid">

        {/* Header Column */}
        <div className="lg:col-span-5 p-6 sm:p-8 lg:p-12 xl:p-16 flex flex-col justify-center relative overflow-hidden bg-zinc-50/50">
          <div className="absolute inset-0 pointer-events-none opacity-30"
            style={{ backgroundImage: 'linear-gradient(to right, #e4e4e7 1px, transparent 1px), linear-gradient(to bottom, #e4e4e7 1px, transparent 1px)', backgroundSize: '48px 48px' }}>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="text-brand-500 text-xs font-semibold uppercase tracking-wider mb-3">Benefícios</div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight text-zinc-900">
              Construído para <br />
              <span className="text-brand-500">crescer</span>
            </h2>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Não adianta ter as melhores máquinas se a gestão está travando a sua produção. Desenvolvemos as ferramentas certas na fundação do seu negócio para você focar apenas no seu produto.
            </p>
          </motion.div>
        </div>

        {/* Benefits Grid - 2x2 on Mobile for punchy look */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 sm:grid-cols-2 divide-x divide-y divide-grid h-full relative">
            {/* Fix for top border on the first row when using divide-y */}
            <div className="absolute top-0 left-0 w-full h-px bg-zinc-200 hidden"></div>

            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 sm:p-8 lg:p-10 hover:bg-zinc-50 transition-colors"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 border border-zinc-200 bg-white shadow-sm text-brand-500 flex items-center justify-center mb-4 sm:mb-6 rounded-sm">
                  {benefit.icon}
                </div>
                <h3 className="text-sm sm:text-base font-semibold mb-1.5 sm:mb-2 text-zinc-900">{benefit.title}</h3>
                <p className="text-zinc-600 text-[11px] sm:text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Benefits;
