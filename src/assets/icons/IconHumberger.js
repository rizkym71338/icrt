import React from "react";

const IconHumberger = ({ isOpen }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        className={
          !isOpen
            ? "block dark:text-gray-200 transition-all duration-300"
            : " opacity-0 scale-0 transition-all ease-out duration-300"
        }
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h8m-8 6h16"
      />
      <path
        className={
          isOpen
            ? "block dark:text-gray-200 transition-all duration-300"
            : " opacity-0 scale-0 transition-all ease-out duration-300"
        }
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export default IconHumberger;
