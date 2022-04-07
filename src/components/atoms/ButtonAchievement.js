import React from "react";

const ButtonAchievement = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-sm font-semibold text-primary-500 lg:text-lg md:text-base"
    >
      Read More
    </button>
  );
};

export default ButtonAchievement;
