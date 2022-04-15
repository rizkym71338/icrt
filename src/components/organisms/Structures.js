import React, { useState } from "react";
import {
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
      nama: "Meita Sutra Safira",
      src: StructureMeita,
      jabatan: "Bendahara",
      jurusan: "Teknik Informatika 2020",
    },
    {
      nama: "Fahmi Afandi",
      src: StructureFahmi,
      jabatan: "Divisi Mekanik",
      jurusan: "Teknik Informatika 2020",
    },
    {
      nama: "Rizky Maulana",
      src: StructureRizky,
      jabatan: "Divisi Software",
      jurusan: "Teknik Informatika 2020",
    },
    {
      nama: "Rini Rosdiana Ningsih",
      src: StructureRini,
      jabatan: "Divisi Multimedia",
      jurusan: "Teknik Informatika 2020",
    },
    {
      nama: "Guntur Aji Saputra",
      src: StructureGuntur,
      jabatan: "Divisi Multimedia",
      jurusan: "Manajemen Informatika 2020",
    },
    {
      nama: "Husni Mubarok",
      src: StructureHusni,
      jabatan: "Divisi Humas",
      jurusan: "Teknik Informatika 2020",
    },
    {
      nama: "Iis Siti Aisyah",
      src: StructureIis,
      jabatan: "Divisi Humas",
      jurusan: "Teknik Informatika 2020",
    },
    {
      nama: "Eviyanti",
      src: StructureEvi,
      jabatan: "Divisi Humas",
      jurusan: "Teknik Informatika 2020",
    },
    {
      nama: "Risma Ardhani",
      src: StructureRisma,
      jabatan: "Divisi Humas",
      jurusan: "Teknik Informatika 2020",
    },
    {
      nama: "Imam Arifin",
      src: StructureImam,
      jabatan: "Divisi Networking",
      jurusan: "Teknik Informatika 2020",
    },
  ];

  return (
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
  );
};

export default Structures;
