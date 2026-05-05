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
  ChevronRight,
  DollarSign,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Phone,
  Mail
} from 'lucide-react';

// Mock data
const mockClients = [
  { id: 'CLI-001', name: 'Carlos Costa', phone: '(11) 98765-4321', email: 'carlos@email.com', orders: 3, total: 'R$ 18.500' },
  { id: 'CLI-002', name: 'Ana Santos', phone: '(11) 91234-5678', email: 'ana@email.com', orders: 2, total: 'R$ 12.800' },
  { id: 'CLI-003', name: 'João Silva', phone: '(21) 99876-5432', email: 'joao@email.com', orders: 1, total: 'R$ 4.200' },
  { id: 'CLI-004', name: 'Mariana Luz', phone: '(31) 97654-3210', email: 'mariana@email.com', orders: 4, total: 'R$ 32.000' },
];

const mockFinances = [
  { id: 'FIN-001', desc: 'Cozinha Planejada — Carlos Costa', type: 'receber', value: 'R$ 8.500', due: '10/05/2026', status: 'Pendente' },
  { id: 'FIN-002', desc: 'MDF 18mm — Fornecedor XYZ', type: 'pagar', value: 'R$ 2.340', due: '08/05/2026', status: 'Pago' },
  { id: 'FIN-003', desc: 'Armário Embutido — Ana Santos', type: 'receber', value: 'R$ 6.200', due: '15/05/2026', status: 'Pendente' },
  { id: 'FIN-004', desc: 'Ferragens — Fornecedor ABC', type: 'pagar', value: 'R$ 890', due: '05/05/2026', status: 'Pago' },
  { id: 'FIN-005', desc: 'Mesa de Jantar — João Silva', type: 'receber', value: 'R$ 4.200', due: '20/05/2026', status: 'Atrasado' },
];

const Demo = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [orders, setOrders] = useState([
    { id: 'ORD-001', client: 'Carlos Costa', type: 'Cozinha Planejada', status: 'Finalizado' },
    { id: 'ORD-002', client: 'Ana Santos', type: 'Armário Embutido', status: 'Produção' },
    { id: 'ORD-003', client: 'João Silva', type: 'Mesa de Jantar', status: 'Orçamento' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newOrder, setNewOrder] = useState({ client: '', type: '' });

  // Stats
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
        const flow = { 'Orçamento': 'Produção', 'Produção': 'Finalizado', 'Finalizado': 'Finalizado' };
        return { ...order, status: flow[order.status] };
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

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'pedidos', label: 'Pedidos', icon: ShoppingCart },
    { id: 'clientes', label: 'Clientes', icon: Users },
    { id: 'financeiro', label: 'Financeiro', icon: DollarSign },
  ];

  const tabTitles = {
    dashboard: 'Dashboard',
    pedidos: 'Pedidos',
    clientes: 'Clientes',
    financeiro: 'Financeiro',
  };

  // ── Tab content renderers ──

  const renderDashboard = () => (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm">
          <div className="text-zinc-500 text-xs font-medium mb-1">Pedidos no Mês</div>
          <div className="text-3xl font-bold text-zinc-900">{totalOrders}</div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10"><Hammer className="w-12 h-12" /></div>
          <div className="text-zinc-500 text-xs font-medium mb-1">Em Produção</div>
          <div className="text-3xl font-bold text-blue-600">{inProduction}</div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10"><Check className="w-12 h-12" /></div>
          <div className="text-zinc-500 text-xs font-medium mb-1">Finalizados</div>
          <div className="text-3xl font-bold text-emerald-600">{finished}</div>
        </div>
      </div>

      {/* Recent activity */}
      <div className="bg-white border border-zinc-200 rounded-xl shadow-sm">
        <div className="px-6 py-4 border-b border-zinc-200">
          <h3 className="font-semibold text-zinc-900">Atividade Recente</h3>
        </div>
        <div className="divide-y divide-zinc-100">
          {orders.slice(0, 3).map(order => (
            <div key={order.id} className="px-6 py-3 flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-zinc-900">{order.type}</div>
                <div className="text-xs text-zinc-500">{order.client}</div>
              </div>
              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold border ${getStatusStyle(order.status)}`}>
                {getStatusIcon(order.status)}{order.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  const renderPedidos = () => (
    <div className="bg-white border border-zinc-200 rounded-xl shadow-sm flex flex-col">
      <div className="px-6 py-4 border-b border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-semibold text-zinc-900 text-lg">Todos os Pedidos</h3>
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
                  initial={{ opacity: 0, backgroundColor: "#fffbeb" }}
                  animate={{ opacity: 1, backgroundColor: "#ffffff" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="font-medium text-zinc-900">{order.client}</div>
                    <div className="text-xs text-zinc-400 font-mono mt-0.5">{order.id}</div>
                  </td>
                  <td className="px-6 py-4">{order.type}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold border ${getStatusStyle(order.status)}`}>
                      {getStatusIcon(order.status)}{order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {order.status !== 'Finalizado' ? (
                      <button
                        onClick={() => cycleStatus(order.id)}
                        className="inline-flex items-center text-xs font-medium text-zinc-500 bg-white border border-zinc-200 rounded-md px-3 py-1.5 hover:bg-zinc-50 hover:text-brand-600 transition-colors shadow-sm"
                      >
                        Avançar <ChevronRight className="w-3 h-3 ml-1" />
                      </button>
                    ) : (
                      <span className="text-xs text-emerald-500 font-medium">Concluído ✓</span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderClientes = () => (
    <div className="bg-white border border-zinc-200 rounded-xl shadow-sm">
      <div className="px-6 py-4 border-b border-zinc-200">
        <h3 className="font-semibold text-zinc-900 text-lg">Base de Clientes</h3>
        <p className="text-xs text-zinc-500">{mockClients.length} clientes cadastrados</p>
      </div>
      <div className="divide-y divide-zinc-100">
        {mockClients.map(client => (
          <div key={client.id} className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-zinc-50/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-500 font-bold text-sm">
                {client.name.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-semibold text-zinc-900">{client.name}</div>
                <div className="flex items-center gap-3 mt-0.5">
                  <span className="text-xs text-zinc-400 flex items-center gap-1"><Phone className="w-3 h-3" />{client.phone}</span>
                  <span className="text-xs text-zinc-400 hidden sm:flex items-center gap-1"><Mail className="w-3 h-3" />{client.email}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6 text-right sm:text-left">
              <div>
                <div className="text-xs text-zinc-400">Pedidos</div>
                <div className="text-sm font-bold text-zinc-900">{client.orders}</div>
              </div>
              <div>
                <div className="text-xs text-zinc-400">Faturado</div>
                <div className="text-sm font-bold text-emerald-600">{client.total}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFinanceiro = () => {
    const totalReceber = 'R$ 18.900';
    const totalPagar = 'R$ 3.230';
    const saldo = 'R$ 15.670';

    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <div className="text-zinc-500 text-xs font-medium">A Receber</div>
              <ArrowUpRight className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-2xl font-bold text-emerald-600">{totalReceber}</div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <div className="text-zinc-500 text-xs font-medium">A Pagar</div>
              <ArrowDownRight className="w-4 h-4 text-red-500" />
            </div>
            <div className="text-2xl font-bold text-red-600">{totalPagar}</div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <div className="text-zinc-500 text-xs font-medium">Saldo</div>
              <TrendingUp className="w-4 h-4 text-brand-500" />
            </div>
            <div className="text-2xl font-bold text-zinc-900">{saldo}</div>
          </div>
        </div>

        <div className="bg-white border border-zinc-200 rounded-xl shadow-sm">
          <div className="px-6 py-4 border-b border-zinc-200">
            <h3 className="font-semibold text-zinc-900 text-lg">Movimentações</h3>
            <p className="text-xs text-zinc-500">Contas a pagar e receber</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-zinc-600">
              <thead className="text-xs text-zinc-500 uppercase bg-zinc-50/50 border-b border-zinc-200">
                <tr>
                  <th className="px-6 py-3 font-medium">Descrição</th>
                  <th className="px-6 py-3 font-medium">Tipo</th>
                  <th className="px-6 py-3 font-medium">Valor</th>
                  <th className="px-6 py-3 font-medium">Vencimento</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {mockFinances.map(item => (
                  <tr key={item.id} className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-zinc-900 text-xs sm:text-sm">{item.desc}</div>
                      <div className="text-xs text-zinc-400 font-mono mt-0.5">{item.id}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold ${item.type === 'receber' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
                        {item.type === 'receber' ? '↑ Receber' : '↓ Pagar'}
                      </span>
                    </td>
                    <td className={`px-6 py-4 font-semibold ${item.type === 'receber' ? 'text-emerald-600' : 'text-red-600'}`}>{item.value}</td>
                    <td className="px-6 py-4 text-zinc-500 text-xs">{item.due}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold border ${
                        item.status === 'Pago' ? 'bg-emerald-100 text-emerald-800 border-emerald-200' :
                        item.status === 'Atrasado' ? 'bg-red-100 text-red-800 border-red-200' :
                        'bg-yellow-100 text-yellow-800 border-yellow-200'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return renderDashboard();
      case 'pedidos': return renderPedidos();
      case 'clientes': return renderClientes();
      case 'financeiro': return renderFinanceiro();
      default: return renderDashboard();
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
            Teste antes de contratar
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto"
          >
            Navegue pelas telas do sistema, crie pedidos e acompanhe o financeiro.
            É assim que o seu dia a dia vai funcionar com a gente.
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
          <div className="w-full md:w-56 bg-white border-b md:border-b-0 md:border-r border-zinc-200 flex md:flex-col z-10">
            <div className="h-14 md:h-16 flex items-center px-4 md:px-6 border-b border-zinc-200 shrink-0">
              <div className="flex items-center gap-0.5 font-bold text-base md:text-lg tracking-tight text-zinc-900">
                <div className="w-5 h-5 md:w-6 md:h-6 rounded bg-brand-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xs md:text-sm leading-none">V</span>
                </div>
                <span>etor</span>
              </div>
            </div>
            <div className="flex md:flex-col md:p-4 md:flex-1 overflow-x-auto md:overflow-visible">
              <div className="flex md:flex-col md:space-y-1 px-2 md:px-0 py-2 md:py-0 gap-1">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 md:gap-3 px-3 py-2 text-xs md:text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                      activeTab === tab.id
                        ? 'bg-zinc-100 text-brand-600'
                        : 'text-zinc-500 hover:bg-zinc-50 hover:text-zinc-700'
                    }`}
                  >
                    <tab.icon className="w-4 h-4 shrink-0" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col relative bg-zinc-50 z-0">
            {/* Topbar */}
            <header className="h-14 md:h-16 bg-white border-b border-zinc-200 flex items-center justify-between px-4 sm:px-8 z-10">
              <div className="font-semibold text-zinc-800 text-sm md:text-base">{tabTitles[activeTab]}</div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-200 border border-zinc-300"></div>
              </div>
            </header>

            {/* Content Area */}
            <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {renderContent()}
                </motion.div>
              </AnimatePresence>
            </main>

            {/* Modal */}
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
