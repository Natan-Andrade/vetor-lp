import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, FileText, AlertCircle, CreditCard, Search } from 'lucide-react';

const problems = [
  {
    icon: <MessageCircle className="w-5 h-5 text-brand-500" />,
    title: "Vendas perdidas no WhatsApp",
    description: "Mensagens importantes se perdem em conversas pessoais. Cada orçamento esquecido é um cliente que fecha com a concorrência."
  },
  {
    icon: <FileText className="w-5 h-5 text-brand-500" />,
    title: "Orçamentos de papel",
    description: "Anotar projetos e medidas em folhas soltas gera desorganização. Passa amadorismo e causa perda de informações vitais."
  },
  {
    icon: <CreditCard className="w-5 h-5 text-brand-500" />,
    title: "Financeiro no escuro",
    description: "Sem controle exato de contas a pagar e receber, o fluxo de caixa é um pesadelo. Você trabalha muito e não vê a cor do dinheiro."
  },
  {
    icon: <Search className="w-5 h-5 text-brand-500" />,
    title: "Cliente ansioso",
    description: "Sem visibilidade do andamento da produção e entrega, o cliente sobrecarrega seu WhatsApp perguntando sobre o pedido."
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
              Anotações perdidas e a falta de um site profissional podem estar limitando o verdadeiro potencial da sua marcenaria. Descubra como pequenos gargalos afastam novos clientes e atrasam suas entregas.
            </p>
          </motion.div>
        </div>

        {/* Content Column - Card Grid */}
        <div className="lg:col-span-8 w-full p-6 sm:p-8 lg:p-12 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border border-zinc-200 bg-zinc-50/50 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-brand-200 transition-all rounded-xl flex flex-col"
              >
                <div className="w-10 h-10 rounded-lg border border-zinc-200 bg-white flex items-center justify-center mb-5 shadow-sm text-brand-500">
                  {problem.icon}
                </div>
                <h3 className="text-sm font-bold text-zinc-900 mb-2">{problem.title}</h3>
                <p className="text-zinc-600 text-[13px] leading-relaxed">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Problem;
