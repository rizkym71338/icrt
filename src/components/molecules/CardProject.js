import React from "react";

const CardProject = ({ src, title }) => {
  return (
    <div className="flex flex-col p-4 space-y-5 text-center scale-90 bg-white md:scale-100 dark:bg-slate-900 drop-shadow-xl rounded-3xl transition-500 dark:border dark:border-[#4264FF]/60">
      <div className="flex items-center justify-center overflow-hidden h-60 rounded-3xl w-[364px] transition-500">
        <img src={src} className="object-cover w-full h-full" />
      </div>
      <h1 className="text-lg font-semibold text-slate-900 dark:text-slate-100 lg:text-2xl md:text-xl transition-500">
        {title}
      </h1>
    </div>
  );
};

export default CardProject;
