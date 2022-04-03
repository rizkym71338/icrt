import React from "react";

const NavbarItem = ({ onClick, href, title }) => {
  return (
    <a
      onClick={onClick}
      href={href}
      className="block py-0 pb-3 lg:py-4 px-5 duration-300 hover:text-primary-500 dark:text-slate-100 dark:hover:text-primary-500"
    >
      {title}
    </a>
  );
};

export default NavbarItem;
