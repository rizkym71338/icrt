import React from "react";

const Mail = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      className="cursor-pointer text-slate-700 dark:hover:text-primary-500 dark:text-slate-100 hover:text-primary-500 group-hover:text-primary-500 transition-300"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 8.29751V19.0329C24 20.8889 22.5158 22.3929 20.6842 22.3929H3.31579C2.43639 22.3929 1.593 22.0389 0.971172 21.4088C0.349341 20.7786 0 19.924 0 19.0329V8.29751L11.6198 14.7743C11.8566 14.9062 12.144 14.9062 12.3802 14.7743L24 8.29751ZM20.6842 3.19287C21.5498 3.19295 22.381 3.53601 23.0003 4.14876C23.6196 4.76151 23.978 5.59537 23.9987 6.47223L12 13.1602L0.00126307 6.47159L0.00252643 6.41399C0.0378965 5.5476 0.402446 4.7286 1.01994 4.12828C1.63744 3.52796 2.46006 3.19279 3.31579 3.19287H20.6842Z" />
    </svg>
  );
};

export default Mail;
