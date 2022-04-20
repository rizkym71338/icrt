import React from "react";
import { NavbarItem } from "../atoms";

const NavbarMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`${
        !isOpen && "opacity-0 lg:opacity-100"
      } flex flex-col lg:flex-row lg:mr-5 pt-5 pb-2 lg:py-0 `}
    >
      <NavbarItem
        title="Home"
        href="#home"
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className="relative flex items-center gap-3 px-5 py-0 pb-3 duration-300 cursor-pointer group lg:py-4 hover:text-primary-500 dark:text-slate-100 dark:hover:text-primary-500">
        <p>About</p>
        <svg
          width="14"
          height="12"
          className="text-slate-900 dark:text-slate-200 group-hover:text-primary-500 transition-300 group-hover:rotate-180"
          viewBox="0 0 14 12"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 12L0.0717964 0L13.9282 0L7 12Z" />
        </svg>
        <div
          className={`absolute opacity-0 scale-0 top-0 group-hover:top-16 bg-white dark:bg-slate-900 group-hover:drop-shadow-lg p-2 rounded-md group-hover:opacity-100 group-hover:scale-100 transition-300`}
        >
          <NavbarItem
            title="Team"
            href="#team"
            onClick={() => setIsOpen(!isOpen)}
          />
          <NavbarItem
            title="Structure"
            href="#structure"
            onClick={() => setIsOpen(!isOpen)}
          />
          <NavbarItem
            title="Member"
            href="#member"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
      <NavbarItem
        title="Project"
        href="#project"
        onClick={() => setIsOpen(!isOpen)}
      />
      <NavbarItem
        title="Achievement"
        href="#achievement"
        onClick={() => setIsOpen(!isOpen)}
      />
      <NavbarItem
        title="Contact"
        href="#contact"
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

export default NavbarMenu;
