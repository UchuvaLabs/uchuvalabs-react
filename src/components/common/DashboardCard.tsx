// src/components/common/DashboardCard.tsx
import React from 'react';

interface DashboardCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center">
        <div className="text-blue-500">{icon}</div>
        <div className="ml-4">
          <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
