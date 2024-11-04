import React from "react";
import { useLocation } from "react-router-dom";

const Item = ({ icon, text, path, currentPath, setCurrentPath }) => {
  const isActive = currentPath === path;

  const handleClick = (e) => {
    e.preventDefault();
    setCurrentPath(path);
  };

  return (
    <a
      href="#"
      className={`flex items-center space-x-3 px-6 py-3 ${
        isActive ? "bg-blue-800" : ""
      }`}
    >
      {icon}
      <span>{text}</span>
    </a>
  );
};

export default Item;
