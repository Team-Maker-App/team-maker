import React from "react";
import { ReactComponent as Info } from "../../styles/svg/exclamation.svg";

const Alert = ({ text }) => {
  return (
    <div className="mx-auto text-green-500 flex self-center p-2 rounded-md mb-2 bg-green-200 w-full">
      <div className="self-center">
        <Info width={40} heigth={40} fill="white" />
      </div>
      <p className="text-sm pr-3">{text}</p>
    </div>
  );
};

export default Alert;
