import React from "react";
import {
  HackathonYogyakarta,
  InternetOfThings,
  MuslimHackfest,
} from "../../assets";
import ButtonAchievement from "../atoms/ButtonAchievement";
import { CardAchievement, SectionTitle } from "../molecules";

const Achievements = () => {
  const data = [
    {
      title: "Hackathon Festival  2018 Yogyakarta",
      content:
        "Lomba Hackathon Festival 2018 Jogja - Solo DILo (Digital Innovation Lounge) di Jogja Digital Valley pada tanggal 24-25 November 2018, dengan sebuah produk .....",
      src: HackathonYogyakarta,
      dateTime: "Yogyakarta 2018",
    },
    {
      title: "Muslim Hackfest",
      content:
        "Muslim Hackfest merupakan festival dan hackathon muslim virtual pertama di Indonesia yang ditujukan pada masyarakat Indonesia. Maka dari itu, kami memiliki Ide yang menjadi solusi atas permasalahan tersebut. Ide itu.....",
      src: MuslimHackfest,
      dateTime: "Cirebon, 23 januari - 31 Januari 2021",
    },
    {
      title: "Kopiconcrete 2021 : Internet of Things Internasional Contest",
      content:
        "CIREBON – STMIK IKMI Cirebon kembali menorehkan prestasi baiknya dalam ajang kejuaraan Internasional kompetisi Kopertip Communication and Creativity Contest (KOPICONCRETE) 2021 dengan produk Smard-Card",
      src: InternetOfThings,
      dateTime: "Cirebon, 30 Maret - 30 April 2021",
    },
  ];

  return (
    <section
      id="achievement"
      className="py-20 overflow-hidden bg-white dark:bg-slate-900 transition-500"
    >
      <div className="container transition-500">
        <SectionTitle titleLeft="Our" titleRight="Achievements" />
        <div className="flex flex-col space-y-5 md:space-y-12">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-5 md:justify-center md:items-start md:flex-row md:gap-0 transition-500"
              >
                <div className="flex justify-center w-full md:w-1/2">
                  <CardAchievement src={item.src} title={item.dateTime} />
                </div>
                <div className="flex flex-col w-full px-10 py-5 space-y-6 md:w-1/2 transition-500">
                  <h1 className="w-full text-base font-semibold text-center md:text-left lg:text-2xl md:text-lg text-slate-900 dark:text-slate-100 transition-500">
                    {item.title}
                  </h1>
                  <p className="text-xs text-slate-900 dark:text-slate-100 lg:text-base md:text-sm transition-500">
                    {item.content}
                  </p>
                  <div>
                    <ButtonAchievement />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
