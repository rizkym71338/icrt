import React from "react";
import { IconGithub, IconInstagram, IconMail, IconYoutube } from "../../assets";

const Footer = () => {
  return (
    <div>
      <div className="items-center justify-center py-20 bg-white dark:bg-slate-900 transition-500">
        <div className="flex flex-row items-center justify-between mx-auto w-60">
          <div className="flex items-center justify-center w-10">
            <a
              target="_blank"
              href="https://github.com/ICRT-dev"
              className="transition-all duration-300 transform hover:scale-105"
            >
              <IconGithub height={32} />
            </a>
          </div>
          <div className="flex items-center justify-center w-10">
            <a
              target="_blank"
              href="https://www.instagram.com/icrtikmi/"
              className="transition-all duration-300 transform hover:scale-105"
            >
              <IconInstagram height={32} />
            </a>
          </div>
          <div className="flex items-center justify-center w-10">
            <a
              target="_blank"
              href="mailto:robotikaikmi90@gmail.com"
              className="transition-all duration-300 transform hover:scale-105"
            >
              <IconMail height={32} />
            </a>
          </div>
          <div className="flex items-center justify-center w-10">
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCAAVVbKYuAPeqA-J84J6nnA"
              className="transition-all duration-300 transform hover:scale-105"
            >
              <IconYoutube />
            </a>
          </div>
        </div>
        <div className="items-center justify-center mt-10 transition-500">
          <p className="text-sm font-semibold text-center md:text-base text-slate-700 dark:text-slate-300 transition-500">
            &copy; Copyright 2021 -{" "}
            <span className="text-primary-500">Design by UI/UX Team ICRT</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
