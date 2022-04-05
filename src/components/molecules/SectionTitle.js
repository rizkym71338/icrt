import React from "react";

const SectionTitle = ({ titleLeft, titleRight }) => {
  return (
    <h1 className="mb-10 text-3xl font-semibold text-center lg:text-5xl md:text-4xl lg:mb-24 text-slate-900 dark:text-slate-100 transition-500">
      {titleLeft} <span className="text-primary-500">{titleRight}</span>
    </h1>
  );
};

export default SectionTitle;
