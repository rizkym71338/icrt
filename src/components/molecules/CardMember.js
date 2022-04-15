import React from "react";
import { IconGithub, IconInstagram, IconMail } from "../../assets";

const CardMember = ({
  src,
  nama,
  divisi,
  jurusan,
  status,
  urlGit,
  urlIG,
  urlMail,
}) => {
  return (
    <div className="flex flex-col mx-auto p-5 space-y-5 scale-90 bg-white w-[360px] md:scale-100 dark:bg-slate-900 drop-shadow-xl dark:border dark:border-[#4264FF]/60 rounded-3xl transition-500 group">
      <div className="relative flex items-center justify-center w-full h-64 overflow-hidden rounded-3xl bg-slate-300 dark:bg-slate-400 group-hover:bg-primary-300 dark:group-hover:bg-primary-400 transition-500">
        <img src={src} className="h-full" />
        <div className="absolute bottom-4 right-4 py-[5px] px-6 text-sm font-medium backdrop-blur transition-300 border-[0.5px] border-slate-900 rounded-full group-hover:border-primary-500 group-hover:text-white bg-white/20 dark:border-white dark:text-slate-100 dark:group-hover:text-slate-900">
          {status}
        </div>
      </div>
      <h1 className="text-lg font-semibold text-slate-900 dark:text-slate-100 lg:text-2xl md:text-xl transition-500">
        {nama}
      </h1>
      <div className="flex justify-between transition-500">
        <h2 className="text-base lg:text-xl md:text-lg text-slate-900 dark:text-slate-100 transition-500">
          {divisi}
        </h2>
        <div className="flex justify-center gap-2.5">
          <a href={urlGit}>
            <IconGithub height={24} width={24} />
          </a>
          <a href={urlIG}>
            <IconInstagram height={24} width={24} />
          </a>
          <a href={urlMail}>
            <IconMail height={24} width={24} />
          </a>
        </div>
      </div>
      <h2 className="text-base lg:text-xl md:text-lg text-slate-900 dark:text-slate-100 transition-500">
        {jurusan}
      </h2>
    </div>
  );
};

export default CardMember;
