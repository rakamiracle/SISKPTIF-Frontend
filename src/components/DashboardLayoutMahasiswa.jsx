import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentMenuItem, setCurrentMenuItem] = useState('SITRACK');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 relative">
      <Navbar title={currentMenuItem} onToggleSidebar={toggleSidebar} />
        <div className="flex">
            <Sidebar isOpen={isSidebarOpen}/>
            <div
                className={`transition-all duration-300 flex-1 ${
                    isSidebarOpen ? 'lg:ml-64' : ''
                }`}
            >
                <main className="p-8 mt-16">
                    <Outlet/>
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
    </div>
  );
};

export default DashboardLayout;
