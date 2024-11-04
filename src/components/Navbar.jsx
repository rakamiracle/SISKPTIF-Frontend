import React from "react";
import { FaBell } from "react-icons/fa";

const DashboardNavbar = () => {
  return (
    <div>
      <header className="bg-white shadow">
        <div className="flex justify-between items-center px-8 py-4">
          <h1 className="text-xl">Beranda</h1>
          <div className="flex items-center space-x-4">
            <FaBell className="w-6 h-6" />
            <div className="w-8 h-8 bg-gray-300 rounded-full" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default DashboardNavbar;
