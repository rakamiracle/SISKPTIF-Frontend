import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentMenuItem, setCurrentMenuItem] = useState('Dashboard');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar title={currentMenuItem} onToggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      
      {/* Main Content */}
      <div className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <main className="p-8 mt-16">
          <Outlet />
        </main>
      </div>
      
      {/* Overlay untuk mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-gray-900/50 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default DashboardLayout;
