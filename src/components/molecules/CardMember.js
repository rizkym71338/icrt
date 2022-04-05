import React from "react";
import { IconGithub, IconInstagram, IconMail, IconYoutube } from "../../assets";

const CardMember = ({
  src,
  nama,
  divisi,
  status,
  urlGit,
  urlIG,
  urlMail,
  urlYT,
}) => {
  return (
    <div className="p-5 bg-white md:scale-100 scale-90 dark:bg-slate-800 drop-shadow-xl text-center rounded-3xl flex flex-col space-y-5 transition-500">
      <div className="flex justify-center items-center rounded-3xl bg-primary-200 dark:bg-primary-300 h-64 w-80 transition-500">
        <img src={src} className="h-full" />
      </div>
      <h1 className="text-slate-900 dark:text-slate-100 font-semibold lg:text-2xl md:text-xl text-lg transition-500">
        {nama}
      </h1>
      <div className="flex flex-col space-y-2.5 transition-500">
        <h2 className="lg:text-xl md:text-lg text-base text-slate-900 dark:text-slate-100 transition-500">
          {divisi}
        </h2>
        <h3 className="lg:text-xl md:text-lg text-base text-slate-900 dark:text-slate-100 transition-500">
          Status : <span className="text-primary-500">{status}</span>
        </h3>
      </div>
      <div className="flex justify-center gap-5">
        <a href={urlGit}>
          <IconGithub />
        </a>
        <a href={urlIG}>
          <IconInstagram />
        </a>
        <a href={urlMail}>
          <IconMail />
        </a>
        <a href={urlYT}>
          <IconYoutube />
        </a>
      </div>
    </div>
  );
};

export default CardMember;
