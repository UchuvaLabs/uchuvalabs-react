// src/pages/Dashboard.tsx
import React from 'react';
import DashboardCard from '../components/common/DashboardCard';
import WalletOverview from '../components/wallet/WalletOverview';
// import TransactionTable from '../components/transactions/TransactionTable';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <DashboardCard title="Ingresos" value="$10,000" icon={<i className="fas fa-dollar-sign"></i>} />
        <DashboardCard title="Gastos" value="$7,000" icon={<i className="fas fa-money-bill"></i>} />
        <DashboardCard title="Ahorros" value="$3,000" icon={<i className="fas fa-piggy-bank"></i>} />
      </div>
      <WalletOverview />
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Transacciones Recientes</h2>
        {/* <TransactionTable /> */}
      </div>
    </div>
  );
};

export default Dashboard;
