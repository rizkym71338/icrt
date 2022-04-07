import React from "react";

const CardAchievement = ({ src, title }) => {
  return (
    <div className="flex flex-col md:space-y-5 transition-500">
      <div className="h-56 overflow-hidden scale-75 w-96 md:scale-100 rounded-xl transition-500">
        <img src={src} className="object-cover w-full h-full" />
      </div>
      <h1 className="text-base font-semibold text-center text-slate-900 dark:text-slate-100 transition-500">
        {title}
      </h1>
    </div>
  );
};

export default CardAchievement;
