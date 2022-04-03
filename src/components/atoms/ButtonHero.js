import React from "react";

const ButtonHero = ({ title, href }) => {
  return (
    <a
      href={href}
      className="bg-primary-500 cursor-pointer hover:bg-primary-600 transition-300 shadow-xl text-base font-medium text-white rounded-full py-2.5 md:px-9 px-5"
    >
      {title}
    </a>
  );
};

export default ButtonHero;
