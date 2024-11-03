import React from "react";

const Item = ({icon, text, active}) => {
  return (
    <div
      className={`flex items-center space-x-3 px-6 py-3 ${
        active ? "bg-blue-800" : "hover:bg-blue-800"
      }`}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default Item;
