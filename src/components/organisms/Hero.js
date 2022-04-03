import React from "react";
import { Blob, LogoIcon } from "../../assets";
import { ButtonHero } from "../atoms";

const Hero = () => {
  return (
    <div className="xl:h-screen 2xl:h-full box-border pt-20 pb-5 bg-white dark:bg-slate-900 transition-500">
      <div className="container lg:flex flex-col justify-center h-full px-6 transition-500 space-y-5">
        <h1 className="lg:text-5xl text-center md:text-left md:text-4xl text-2xl font-semibold text-slate-900 dark:text-slate-100 transition-500">
          Ikmi Cirebon <span className="text-primary-500">Robotik Team</span>
        </h1>
        <div className="flex flex-col lg:flex-row md:p-5 space-y-6 lg:space-y-0 transition-500">
          {/* LEFT */}
          <div className="w-full lg:w-1/2">
            <div className="py-2.5 px-5 space-y-5">
              <h2 className="lg:text-2xl text-xl transition-500 font-medium text-primary-500">
                Visi
              </h2>
              <p className="lg:text-base text-sm transition-500 text-slate-900 dark:text-slate-100">
                Menjadikan Unit Kegiatan Mahasiswa Robotika Paling Unggul dan
                Berprestasi di bidang Robotika.
              </p>
            </div>
            <div className="py-2.5 px-5 space-y-5">
              <h2 className="lg:text-2xl text-xl transition-500 font-medium text-primary-500">
                Misi
              </h2>
              <div className="lg:text-base text-sm transition-500 text-slate-900 dark:text-slate-100">
                <div className="flex gap-3">
                  <span>&bull;</span>
                  <p>Mengadakan berbagai pelatihan di bidang robotika.</p>
                </div>
                <div className="flex gap-3">
                  <span>&bull;</span>
                  <p>
                    Mengikuti kompetisi kejuaraan robotika se-indonesia dan
                    internasional.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span>&bull;</span>
                  <p>Menyelenggarakan seminar atau workshop robotika.</p>
                </div>
              </div>
            </div>
            <div className="flex justify-around p-5">
              <ButtonHero title="Team" href="#team" />
              <ButtonHero title="Structure" href="#structure" />
              <ButtonHero title="Member" href="#member" />
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-full flex justify-center transition-500 items-center lg:w-1/2">
            <div className="relative flex h-[360px]">
              <img src={LogoIcon} className="h-full z-10" />
              <Blob className="absolute bottom-0 left-0 scale-75 text-primary-100 dark:text-primary-300 transition-500" />
              <Blob className="absolute top-10 -right-12 rotate-180 scale-50 text-slate-100 dark:text-slate-300 transition-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
