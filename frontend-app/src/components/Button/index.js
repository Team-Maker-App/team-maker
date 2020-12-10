import React from "react";

const Button = ({ label, ...rest }) => {
  return (
    <span class="sm:ml-3 absolute bottom-5 right-2">
      <button
        type="button"
        class="inline-flex items-center p-3 rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-indigo-700 focus:outline-none"
        {...rest}
      >
        <svg
          class="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        {label}
      </button>
    </span>
  );
};

export default Button;
