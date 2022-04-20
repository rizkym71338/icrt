import React, { useState } from "react";
import {
  Avatar,
  StructureEvi,
  StructureFahmi,
  StructureFauzan,
  StructureGuntur,
  StructureHusni,
  StructureIis,
  StructureImam,
  StructureMarwah,
  StructureMeita,
  StructureRini,
  StructureRisma,
  StructureRizky,
  StructureWisnu,
} from "../../assets";
import { ButtonStructure } from "../atoms";
import { CardStructure, SectionTitle } from "../molecules";

const Structures = () => {
  const [showMore, setShowMore] = useState(false);

  const data = [
    {
      nama: "Siti Marwah",
      src: StructureMarwah,
      jabatan: "Sekertaris",
      jurusan: "Teknik Informatika 2020",
    },
    {
      nama: "Nursyifa Puspa Ar-Rahmi S",
      src: Avatar,
      jabatan: "Sekertaris",
      jurusan: "Teknik Informatika 2020",
    },
    {
      nama: "Meita Sutra Safira",
      src: StructureMeita,
      jabatan: "Bendahara",
      jurusan: "Teknik Informatika 2020",
    },
    {
      nama: "Fahmi Afandi",
      src: StructureFahmi,
      jabatan: "Anggota",
      jurusan: "Teknik Informatika 2020",
    },
    {
      nama: "Oom Muharommah",
      src: Avatar,
      jabatan: "Anggota",
      jurusan: "Teknik Informatika 2020",
    },
    {
      nama: "Azhar",
      src: Avatar,
      jabatan: "Anggota",
      jurusan: "Teknik Informatika 2020",
    },
    {
      nama: "Rizky Maulana",
      src: StructureRizky,
      jabatan: "Anggota",
      jurusan: "Teknik Informatika 2020",
    },
    {
      nama: "Iis Siti Aisyah",
      src: StructureIis,
      jabatan: "Anggota",
      jurusan: "Teknik Informatika 2020",
    },
    {
      nama: "Ridwan Firdaus",
      src: Avatar,
      jabatan: "Anggota",
      jurusan: "Teknik Informatika 2020",
    },
    {
      nama: "Guntur Aji Saputra",
      src: StructureGuntur,
      jabatan: "Anggota",
      jurusan: "Manajemen Informatika 2020",
    },
    {
      nama: "Rini Rosdiana Ningsih",
      src: StructureRini,
      jabatan: "Anggota",
      jurusan: "Teknik Informatika 2020",
    },
    {
      nama: "Husni Mubarok",
      src: StructureHusni,
      jabatan: "Anggota",
      jurusan: "Teknik Informatika 2020",
    },
    {
      nama: "Risma Ardhani",
      src: StructureRisma,
      jabatan: "Anggota",
      jurusan: "Teknik Informatika 2020",
    },
    {
      nama: "Imam Arifin",
      src: StructureImam,
      jabatan: "Anggota",
      jurusan: "Teknik Informatika 2020",
    },
    {
      nama: "Eviyanti",
      src: StructureEvi,
      jabatan: "Anggota",
      jurusan: "Teknik Informatika 2020",
    },
  ];

  return (
    <>
      <section
        id="structure"
        className="py-20 overflow-hidden bg-white dark:bg-slate-900 transition-500"
      >
        <div className="container transition-500">
          <SectionTitle titleLeft="Our" titleRight="Structures" />
          <div className="flex flex-col items-center justify-center p-5 space-y-12 md:gap-12 md:space-y-0 transition-500 md:flex-row">
            <CardStructure
              src={StructureFauzan}
              jabatan="Ketua"
              nama="Mochammad Fauzan F"
              jurusan="Teknik Informatika 2020"
            />
            <CardStructure
              src={StructureWisnu}
              jabatan="Wakil Ketua"
              nama="Wisnu Wijaya"
              jurusan="Teknik Informatika 2020"
            />
          </div>
          <div
            className={`${
              showMore
                ? "flex md:flex-row flex-col flex-wrap items-center justify-center p-5 space-y-12 md:space-y-0 md:gap-12"
                : "absolute scale-0 -z-50"
            }  transition-500`}
          >
            {data.map((item, index) => {
              return (
                <CardStructure
                  key={index}
                  src={item.src}
                  jabatan={item.jabatan}
                  nama={item.nama}
                  jurusan={item.jurusan}
                />
              );
            })}
          </div>
          <div className="flex justify-center pt-10 lg:pt-20">
            <ButtonStructure
              title={showMore ? "Lebih Sedikit" : "Lebih Banyak"}
              onClick={() => setShowMore(!showMore)}
            />
          </div>
        </div>
      </section>
      <a
        href="#structure"
        className={`${
          showMore ? "fixed" : "absolute -z-50 opacity-0"
        }  z-50 bottom-6 right-6 md:right-12 md:bottom-12 bg-primary-500 rounded-full drop-shadow-md p-4 cursor-pointer transition-500`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-white dark:text-slate-900 transition-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </>
  );
};

export default Structures;
