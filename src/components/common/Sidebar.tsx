// src/components/common/Sidebar.tsx
import React from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  DocumentTextIcon,
  CogIcon,
  UserIcon
} from "@heroicons/react/24/outline";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white w-64 h-screen p-4">
      <ul>
        <li className="mb-4 flex items-center">
          <HomeIcon className="h-6 w-6 mr-2" />
          <Link
            to="/dashboard"
            className="text-white hover:bg-gray-700 p-2 rounded block"
          >
            Dashboard
          </Link>
        </li>
        <li className="mb-4 flex items-center">
          <DocumentTextIcon className="h-6 w-6 mr-2" />
          <Link
            to="/transactions"
            className="text-white hover:bg-gray-700 p-2 rounded block"
          >
            Transacciones
          </Link>
        </li>
        <li className="mb-4 flex items-center">
          <UserIcon className="h-6 w-6 mr-2" />
          <Link
            to="/profile"
            className="text-white hover:bg-gray-700 p-2 rounded block"
          >
            Perfil
          </Link>
        </li>
        <li className="mb-4 flex items-center">
          <CogIcon className="h-6 w-6 mr-2" />
          <Link
            to="/settings"
            className="text-white hover:bg-gray-700 p-2 rounded block"
          >
            Configuraciones
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
