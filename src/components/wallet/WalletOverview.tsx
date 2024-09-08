// src/components/wallet/WalletOverview.tsx
import React from 'react';

const WalletOverview: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-semibold text-gray-700">Balance del Wallet</h2>
      <p className="text-3xl font-bold text-gray-900">$5,000.00</p>
    </div>
  );
};

export default WalletOverview;
