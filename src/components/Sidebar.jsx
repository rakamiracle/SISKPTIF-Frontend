import React from "react";
import logo from "../assets/logoimage.png";
import Item from "./Item"

const Sidebar = ({ menuItems, logo }) => {
  return (
    <div className="w-64 bg-blue-900 text-white">
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="SISKPTIF Logo" className="w-12 h-12" />
          <span className="text-xl font-bold">SISKPTIF</span>
        </div>
      </div>

      <nav className="mt-8">
        {menuItems.map((item, index) => (
          <Item
            key={index}
            icon={item.icon}
            text={item.text}
            active={item.active}
          />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
