import React from "react";
import Notification from "./Notification";
import UserMenu from "./UserMenu";

const Navbar = ({ title, onToggleSidebar }) => {
  return (
    <header className="bg-white shadow fixed w-full top-0 z-30">
      <div className="flex justify-between items-center px-8 py-4">
        <div className="flex items-center space-x-4">
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={onToggleSidebar}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <h1 className="text-xl font-medium">{title}</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Notification />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
