import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  Plus,
  X,
  Check,
  Clock,
  Hammer,
  ChevronRight
} from 'lucide-react';

const Demo = () => {
  const [orders, setOrders] = useState([
    { id: 'ORD-001', client: 'Carlos Costa', type: 'Cozinha Planejada', status: 'Finalizado' },
    { id: 'ORD-002', client: 'Ana Santos', type: 'Armário Embutido', status: 'Produção' },
    { id: 'ORD-003', client: 'João Silva', type: 'Mesa de Jantar', status: 'Orçamento' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newOrder, setNewOrder] = useState({ client: '', type: '' });

  // Calculando stats
  const totalOrders = orders.length;
  const inProduction = orders.filter(o => o.status === 'Produção').length;
  const finished = orders.filter(o => o.status === 'Finalizado').length;

  const handleCreateOrder = (e) => {
    e.preventDefault();
    if (!newOrder.client || !newOrder.type) return;

    const id = `ORD-00${orders.length + 1}`;
    setOrders([{ id, client: newOrder.client, type: newOrder.type, status: 'Orçamento' }, ...orders]);
    setNewOrder({ client: '', type: '' });
    setIsModalOpen(false);
  };

  const cycleStatus = (id) => {
    setOrders(orders.map(order => {
      if (order.id === id) {
        let nextStatus = 'Orçamento';
        if (order.status === 'Orçamento') nextStatus = 'Produção';
        else if (order.status === 'Produção') nextStatus = 'Finalizado';
        return { ...order, status: nextStatus };
      }
      return order;
    }));
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Orçamento': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Produção': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Finalizado': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Orçamento': return <Clock className="w-3 h-3 mr-1" />;
      case 'Produção': return <Hammer className="w-3 h-3 mr-1" />;
      case 'Finalizado': return <Check className="w-3 h-3 mr-1" />;
      default: return null;
    }
  };

  return (
    <section id="demo" className="border-b border-grid bg-transparent py-16 sm:py-24">
      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-500 text-xs font-semibold uppercase tracking-wider mb-2"
          >
            Demonstração Interativa
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl font-bold text-zinc-900 mb-4 tracking-tight"
          >
            Veja o sistema em ação
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto"
          >
            Crie um pedido e avance seu status para ver como a gestão fica fluida.
            Uma interface estilo <strong>Filament</strong> pensada para produtividade.
          </motion.p>
        </div>

        {/* Mock App Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-zinc-50 border border-zinc-200 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col md:flex-row font-sans max-w-5xl mx-auto min-h-[600px]"
        >
          {/* Sidebar */}
          <div className="w-64 bg-white border-r border-zinc-200 hidden md:flex flex-col z-10">
            <div className="h-16 flex items-center px-6 border-b border-zinc-200">
              <div className="flex items-center gap-2 font-bold text-lg tracking-tight text-zinc-900">
                <div className="w-6 h-6 rounded bg-brand-500 flex items-center justify-center">
                  <LayoutDashboard className="w-3 h-3 text-white" />
                </div>
                Vetor
              </div>
            </div>
            <div className="p-4 flex-1">
              <div className="space-y-1">
                <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg bg-zinc-100 text-brand-600">
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-zinc-600 hover:bg-zinc-50">
                  <ShoppingCart className="w-4 h-4" />
                  Pedidos
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-zinc-600 hover:bg-zinc-50">
                  <Users className="w-4 h-4" />
                  Clientes
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col relative bg-zinc-50 z-0">
            {/* Topbar */}
            <header className="h-16 bg-white border-b border-zinc-200 flex items-center justify-between px-4 sm:px-8 z-10">
              <div className="font-semibold text-zinc-800">Dashboard</div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-200 border border-zinc-300"></div>
              </div>
            </header>

            {/* Content Area */}
            <main className="flex-1 p-4 sm:p-8 overflow-y-auto">

              {/* Stats Widgets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm flex flex-col justify-between">
                  <div className="text-zinc-500 text-xs font-medium mb-1">Pedidos no Mês</div>
                  <div className="text-3xl font-bold text-zinc-900">{totalOrders}</div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Hammer className="w-12 h-12" />
                  </div>
                  <div className="text-zinc-500 text-xs font-medium mb-1">Em Produção</div>
                  <div className="text-3xl font-bold text-blue-600">{inProduction}</div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Check className="w-12 h-12" />
                  </div>
                  <div className="text-zinc-500 text-xs font-medium mb-1">Finalizados</div>
                  <div className="text-3xl font-bold text-emerald-600">{finished}</div>
                </div>
              </div>

              {/* Table Section */}
              <div className="bg-white border border-zinc-200 rounded-xl shadow-sm flex flex-col">
                {/* Table Header */}
                <div className="px-6 py-4 border-b border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-zinc-900 text-lg">Últimos Pedidos</h3>
                    <p className="text-xs text-zinc-500">Gerencie o fluxo de trabalho</p>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-brand-500 hover:bg-brand-600 text-white px-4 py-2 text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <Plus className="w-4 h-4" />
                    Criar Pedido
                  </button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-zinc-600">
                    <thead className="text-xs text-zinc-500 uppercase bg-zinc-50/50 border-b border-zinc-200">
                      <tr>
                        <th className="px-6 py-3 font-medium">Cliente</th>
                        <th className="px-6 py-3 font-medium">Tipo</th>
                        <th className="px-6 py-3 font-medium">Status</th>
                        <th className="px-6 py-3 font-medium text-right">Ação</th>
                      </tr>
                    </thead>
                    <tbody>
                      <AnimatePresence>
                        {orders.map((order) => (
                          <motion.tr
                            key={order.id}
                            initial={{ opacity: 0, backgroundColor: "#fff5f5" }}
                            animate={{ opacity: 1, backgroundColor: "#ffffff" }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors group"
                          >
                            <td className="px-6 py-4">
                              <div className="font-medium text-zinc-900">{order.client}</div>
                              <div className="text-xs text-zinc-400 font-mono mt-0.5">{order.id}</div>
                            </td>
                            <td className="px-6 py-4">{order.type}</td>
                            <td className="px-6 py-4">
                              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold border ${getStatusStyle(order.status)}`}>
                                {getStatusIcon(order.status)}
                                {order.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <button
                                onClick={() => cycleStatus(order.id)}
                                className="inline-flex items-center justify-center text-xs font-medium text-zinc-500 bg-white border border-zinc-200 rounded-md px-3 py-1.5 hover:bg-zinc-50 hover:text-brand-600 transition-colors shadow-sm"
                              >
                                Avançar <ChevronRight className="w-3 h-3 ml-1" />
                              </button>
                            </td>
                          </motion.tr>
                        ))}
                      </AnimatePresence>
                    </tbody>
                  </table>
                </div>
              </div>

            </main>

            {/* Modal de Criação (Overlay) */}
            <AnimatePresence>
              {isModalOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="bg-white rounded-xl shadow-2xl border border-zinc-200 w-full max-w-md overflow-hidden"
                  >
                    <div className="flex justify-between items-center px-6 py-4 border-b border-zinc-100">
                      <h3 className="font-semibold text-zinc-900">Novo Pedido</h3>
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="text-zinc-400 hover:text-zinc-600 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <form onSubmit={handleCreateOrder} className="p-6">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-zinc-700 mb-1">Nome do Cliente</label>
                          <input
                            type="text"
                            required
                            autoFocus
                            value={newOrder.client}
                            onChange={(e) => setNewOrder({ ...newOrder, client: e.target.value })}
                            className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm"
                            placeholder="Ex: João Silva"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-zinc-700 mb-1">Tipo de Projeto</label>
                          <input
                            type="text"
                            required
                            value={newOrder.type}
                            onChange={(e) => setNewOrder({ ...newOrder, type: e.target.value })}
                            className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm"
                            placeholder="Ex: Armário de Cozinha"
                          />
                        </div>
                      </div>

                      <div className="mt-8 flex justify-end gap-3">
                        <button
                          type="button"
                          onClick={() => setIsModalOpen(false)}
                          className="px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 border border-zinc-200 rounded-lg transition-colors"
                        >
                          Cancelar
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-2 text-sm font-medium text-white bg-brand-500 hover:bg-brand-600 rounded-lg transition-colors shadow-sm flex items-center gap-2"
                        >
                          <Check className="w-4 h-4" />
                          Salvar Pedido
                        </button>
                      </div>
                    </form>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Demo;
