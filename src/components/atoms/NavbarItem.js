import React from "react";

const NavbarItem = ({ onClick, href, title }) => {
  return (
    <a
      onClick={onClick}
      href={href}
      className="block px-5 py-0 pb-3 duration-300 text-slate-700 lg:py-4 hover:text-primary-500 dark:text-slate-100 dark:hover:text-primary-500"
    >
      {title}
    </a>
  );
};

export default NavbarItem;
