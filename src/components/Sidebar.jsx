import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Upload,
  NotepadText,
  BadgeCheck,
  FileCheck,
} from "lucide-react";

const Contoh = ({ isOpen }) => {
  const menuItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />,
    },
    {
      title: "Persyaratan",
      path: "/persyaratan",
      icon: <Upload className="w-5 h-5" />,
    },
    {
      title: "Pendaftaran",
      path: "/pendaftaran",
      icon: <FileCheck className="w-5 h-5" />,
    },
    {
      title: "Status",
      path: "/status",
      icon: <BadgeCheck className="w-5 h-5" />,
    },
  ];

  return (
    <div
      className={`fixed top-0 left-0 z-20 w-64 h-screen transition-transform bg-white dark:bg-gray-800 ${
        isOpen ? "transform-none" : "-translate-x-full"
      }`}
    >
      <div className="h-full px-3 py-4 overflow-y-auto mt-16">
        <ul className="space-y-2 font-medium">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                {item.icon}
                <span className="flex-1 ms-3 whitespace-nowrap">
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contoh;
