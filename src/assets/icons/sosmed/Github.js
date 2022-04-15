import React from "react";

const Github = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      className="cursor-pointer text-slate-700 dark:text-slate-100 hover:text-primary-500 group-hover:text-primary-500 transition-300"
      viewBox="0 0 24 25"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_897_708)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 0.792969C5.37 0.792969 0 6.16297 0 12.793C0 18.103 3.435 22.588 8.205 24.178C8.805 24.283 9.03 23.923 9.03 23.608C9.03 23.323 9.015 22.378 9.015 21.373C6 21.928 5.22 20.638 4.98 19.963C4.845 19.618 4.26 18.553 3.75 18.268C3.33 18.043 2.73 17.488 3.735 17.473C4.68 17.458 5.355 18.343 5.58 18.703C6.66 20.518 8.385 20.008 9.075 19.693C9.18 18.913 9.495 18.388 9.84 18.088C7.17 17.788 4.38 16.753 4.38 12.163C4.38 10.858 4.845 9.77797 5.61 8.93797C5.49 8.63797 5.07 7.40797 5.73 5.75797C5.73 5.75797 6.735 5.44297 9.03 6.98797C9.99 6.71797 11.01 6.58297 12.03 6.58297C13.05 6.58297 14.07 6.71797 15.03 6.98797C17.325 5.42797 18.33 5.75797 18.33 5.75797C18.99 7.40797 18.57 8.63797 18.45 8.93797C19.215 9.77797 19.68 10.843 19.68 12.163C19.68 16.768 16.875 17.788 14.205 18.088C14.64 18.463 15.015 19.183 15.015 20.308C15.015 21.913 15 23.203 15 23.608C15 23.923 15.225 24.298 15.825 24.178C18.2072 23.3737 20.2772 21.8427 21.7437 19.8003C23.2101 17.758 23.9993 15.3073 24 12.793C24 6.16297 18.63 0.792969 12 0.792969Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_897_708">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.792969)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Github;
