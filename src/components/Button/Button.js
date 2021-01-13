import React from "react";

const Button = ({ text, children, action, className = "" }) => {
  return (
    <button
      style={{ minWidth: "180px" }}
      className={`${className} rounded-lg p-1.5 bg-white outline-none active:bg-green-700`}
      onClick={() => action()}
    >
      {text || children}
    </button>
  );
};

export default Button;
