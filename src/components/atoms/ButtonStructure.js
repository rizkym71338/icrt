import React from "react";

const ButtonStructure = ({ onClick, title }) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary-500 cursor-pointer hover:bg-primary-600 transition-300 shadow-xl md:text-base text-sm font-medium text-white dark:text-slate-900 rounded-full md:py-2.5 py-2 md:px-9 px-4"
    >
      {title}
    </button>
  );
};

export default ButtonStructure;
