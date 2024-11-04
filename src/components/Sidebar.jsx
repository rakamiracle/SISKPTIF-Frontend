import React from "react";
import logo from "../assets/logoimage.png";
import Item from "./Item";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Sidebar = ({ menuItems, logo }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLandingPageClick = () => {
    navigate("/");
  };

  return (
    <div className="w-64 bg-blue-900 text-white">
      <div className="p-4">
        <div
          onClick={handleLandingPageClick}
          className="flex items-center space-x-2"
        >
          <img src={logo} alt="SISKPTIF Logo" className="w-12 h-12" />
          <span className="text-xl font-bold">SISKPTIF</span>
        </div>
      </div>

      <nav className="mt-8">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center space-x-2 px-6 py-3 hover:bg-blue-800 transition-colors ${
              location.pathname === item.path ? "bg-blue-800" : ""
            }`}
          >
            {item.icon}
            <span>{item.text}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
