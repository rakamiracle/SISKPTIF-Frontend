import React from "react";

const ItemNavbar = (props) => {
  return (
    <div>
      <a href="${props.href}" className="text-gray-700 hover:text-primary">
        {props.children}
      </a>
    </div>
  );
};

export default ItemNavbar;
