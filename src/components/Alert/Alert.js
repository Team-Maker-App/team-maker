import React from 'react';
import {ReactComponent as Info} from '../../styles/svg/exclamation.svg';

const Alert = () => {
  return (
    <div className="text-green-500 flex justify-around self-center px-2 py-4 rounded-b-lg mb-2 bg-green-200 w-11/12">
      <div className="self-center">
        <Info width={40} heigth={40} fill="white" />
      </div>
      <p className=" pr-3">
        La posición de los jugadores no determina el orden en que atajan
      </p>
    </div>
  );
};

export default Alert;