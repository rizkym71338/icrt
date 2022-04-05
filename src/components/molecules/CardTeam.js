import React from "react";

const CardTeam = ({ src, content }) => {
  return (
    <div className="flex flex-col items-center space-y-10 p-5 bg-white dark:bg-slate-800 rounded-3xl drop-shadow-xl transition-500">
      <div className="flex items-center justify-center max-w-[128px] transition-500">
        <img src={src} className="w-full" />
      </div>
      <p className="text-slate-900 dark:text-slate-100 text-xs transition-500 text-center">
        {content}
      </p>
    </div>
  );
};

export default CardTeam;
