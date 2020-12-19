import React from 'react';

const Button = ({text, action}) => {
  return (
    <button className="rounded-full py-1 bg-white w-36 outline-none active:bg-green-700" onClick={() => action()} >
      {text}
    </button>
  );
};

export default Button;