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
    <div className="flex flex-col p-5 space-y-5 text-center scale-90 bg-white md:scale-100 dark:bg-slate-900 drop-shadow-xl rounded-3xl transition-500">
      <div className="flex items-center justify-center h-64 rounded-3xl bg-slate-300 dark:bg-slate-400 w-80 transition-500">
        <img src={src} className="h-full" />
      </div>
      <h1 className="text-lg font-semibold text-slate-900 dark:text-slate-100 lg:text-2xl md:text-xl transition-500">
        {nama}
      </h1>
      <div className="flex flex-col space-y-2.5 transition-500">
        <h2 className="text-base lg:text-xl md:text-lg text-slate-900 dark:text-slate-100 transition-500">
          {divisi}
        </h2>
        <h3 className="text-base lg:text-xl md:text-lg text-slate-900 dark:text-slate-100 transition-500">
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
