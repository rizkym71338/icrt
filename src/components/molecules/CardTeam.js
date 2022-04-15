import React from "react";

const CardTeam = ({ src, content }) => {
  return (
    <div className="flex flex-col items-center p-5 space-y-10 bg-white dark:bg-slate-900 rounded-3xl drop-shadow-lg transition-500 dark:border dark:border-[#4264FF]/60">
      <div className="flex items-center justify-center max-w-[128px] transition-500">
        <img src={src} className="w-full" />
      </div>
      <p className="text-xs text-center text-slate-900 dark:text-slate-100 transition-500">
        {content}
      </p>
    </div>
  );
};

export default CardTeam;
