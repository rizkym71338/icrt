import React from "react";
import { BgCardStructure } from "../../assets/svg";

const CardStructure = ({ src, jabatan, nama, jurusan }) => {
  return (
    <div className="flex flex-col justify-center p-5 space-y-5 text-center transition-500 text-slate-900 dark:text-slate-100">
      <div
        className={`overflow-hidden relative rounded-full transition-500 md:w-72 md:h-72 w-52 h-52`}
      >
        <img src={src} className="absolute w-full h-full" alt="test" />
        <BgCardStructure />
      </div>
      <h1 className="text-lg font-semibold lg:text-3xl md:text-xl">
        {jabatan}
      </h1>
      <div className="flex flex-col space-y-2.5">
        <h2 className="text-base font-semibold lg:text-xl md:text-lg">
          {nama}
        </h2>
        <h3 className="text-base lg:text-xl md:text-lg">{jurusan}</h3>
      </div>
    </div>
  );
};

export default CardStructure;
