import React from "react";

const ClickedText = (props) => {
  const { color = "primary", hoverColor = "secondary", children = "Click me" } = props;
  return (
    <div className="text-sm">
      <a
        href="#"
        className="font-instrument font-medium text-${props.color} hover:text-${props.hoverColor}"
      >
        {props.children}
      </a>
    </div>
  );
};

export default ClickedText;
