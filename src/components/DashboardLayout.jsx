import React, { useState } from "react";
import { LayoutDashboard, Upload, NotepadText, BadgeCheck } from "lucide-react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import logo from "../assets/logoimage.png";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const menuItems = [
    {
      icon: <LayoutDashboard className="w-5 h-5" />,
      text: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <Upload className="w-5 h-5" />,
      text: "Pengajuan Dokumen",
      path: "/pengajuan",
    },
    {
      icon: <NotepadText className="w-5 h-5" />,
      text: "Pendaftaran",
      path: "/pendaftaran",
    },
    {
      icon: <BadgeCheck className="w-5 h-5" />,
      text: "Status",
      path: "/status",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar menuItems={menuItems} logo={logo} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
