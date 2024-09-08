// src/components/common/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-white text-xl font-bold">Dashboard</h1>
        <div>
          <button className="text-white hover:text-gray-300">Perfil</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
