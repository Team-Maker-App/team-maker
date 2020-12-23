import React from "react";

const Button = ({ text, action, className = "" }) => {
  return (
    <button
      style={{ minWidth: "180px" }}
      className={`${className} rounded-lg py-2.5 px-2 bg-white outline-none active:bg-green-700`}
      onClick={() => action()}
    >
      {text}
    </button>
  );
};

export default Button;
