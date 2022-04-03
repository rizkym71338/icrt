import React, { useState } from "react";
import { Darkmode } from "../../utils";
import { IconHumberger, IconMoon, IconSun, Logo } from "../../assets";
import { NavbarMenu } from "../molecules";

const Navbar = () => {
  const [colorTheme, setTheme] = Darkmode();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed z-50 w-full">
      <div className="transition-500 lg:shadow-xl lg:bg-white lg:dark:bg-gray-800">
        <div className="flex flex-col lg:flex-row justify-between xl:container mx-auto">
          <div className="flex justify-between items-center lg:dark:bg-transparent lg:bg-transparent dark:bg-gray-800 shadow-xl transition-500 lg:shadow-none bg-white px-6 py-2 lg:py-0">
            <a className="lg:h-14 h-10 block" href="/">
              <img src={Logo} className="h-full" />
            </a>
            <div className="flex flex-row items-center">
              <div className="lg:hidden">
                <div className="flex lg:flex-row justify-center items-center mx-3">
                  <div
                    onClick={() => setTheme(colorTheme)}
                    className="px-2 transition-500 text-gray-700"
                  >
                    {colorTheme == "light" ? <IconSun /> : <IconMoon />}
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="focus:outline-none lg:hidden block"
                >
                  <IconHumberger isOpen={isOpen} />
                </button>
              </div>
            </div>
          </div>

          <div
            className={`${
              isOpen
                ? "block lg:dark:bg-transparent lg:bg-transparent dark:bg-gray-800 bg-white rounded-xl"
                : "h-0 lg:h-full lg:-translate-y-0 -translate-y-full scale-0 lg:scale-100"
            } lg:flex flex-col lg:flex-row lg:justify-end lg:w-full mx-5 mt-3 lg:mt-0 transform transition-all ease-out duration-300`}
          >
            <NavbarMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="hidden lg:flex">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className={`${
                  !isOpen ? "opacity-0 lg:opacity-100" : null
                } flex lg:flex-row justify-center `}
              >
                <div
                  onClick={() => setTheme(colorTheme)}
                  className="block py-0 pb-5 lg:pb-3 lg:py-4 px-2 transition-500 text-gray-700"
                >
                  {colorTheme == "light" ? <IconSun /> : <IconMoon />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
