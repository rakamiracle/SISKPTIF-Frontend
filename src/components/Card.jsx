import React from "react";
import { FaPen } from "react-icons/fa";

const Card = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-8 h-8 bg-blue-900 rounded flex items-center justify-center">
          <FaPen className="w-5 h-5 text-white" />
        </div>
        <h3 className="font-bold">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <button className="text-blue-900 font-bold">Details &gt;</button>
    </div>
  );
};

export default Card;
