import React from "react";
import { NavbarItem } from "../atoms";

const NavbarMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`${
        !isOpen ? "opacity-0 lg:opacity-100" : ""
      } flex flex-col lg:flex-row lg:mr-5 pt-5 pb-2 lg:py-0 `}
    >
      <NavbarItem
        title="Home"
        href="#home"
        onClick={() => setIsOpen(!isOpen)}
      />
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
