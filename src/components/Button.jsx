import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-instrument font-medium text-white bg-primary hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
