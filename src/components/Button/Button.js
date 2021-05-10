import React from "react";

const Button = ({ text, children, action, className = "" }) => {
  return (
    <button
      className={`${className} rounded-lg p-1.5 bg-white outline-none active:bg-green-700`}
      onClick={(e) => action(e)}
    >
      {text || children}
    </button>
  );
};

export default Button;
