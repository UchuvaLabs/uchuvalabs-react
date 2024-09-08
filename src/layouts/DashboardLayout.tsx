import React, { ReactNode } from "react";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";

// Tipado correcto de las props para incluir children
interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
