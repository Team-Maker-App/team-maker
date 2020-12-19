import React from 'react';

const Button = ({text, share}) => {
  return (
    <button className="rounded-full py-1 bg-white w-36" onClick={() => share()} >
      {text}
    </button>
  );
};

export default Button;