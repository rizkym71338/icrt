import React, { useState } from "react";
import {
  MemberEvi,
  MemberFahmi,
  MemberFauzan,
  MemberGuntur,
  MemberHusni,
  MemberIis,
  MemberImam,
  MemberMarwah,
  MemberMeita,
  MemberRaka,
  MemberRini,
  MemberRisma,
  MemberRizky,
  MemberWisnu,
} from "../../assets";
import { ButtonStructure } from "../atoms";
import { CardMember, SectionTitle } from "../molecules";

const Members = () => {
  const [showMore, setShowMore] = useState(false);

  const data = [
    {
      nama: "Mochammad Fauzan F",
      src: MemberFauzan,
      divisi: "Divisi Mekanik",
      status: "Active",
      urlGit: "#",
      urlIG: "#",
      urlMail: "#",
      urlYT: "#",
    },
    {
      nama: "Wisnu Wijaya",
      src: MemberWisnu,
      divisi: "Divisi Networking",
      status: "Active",
      urlGit: "#",
      urlIG: "#",
      urlMail: "#",
      urlYT: "#",
    },
    {
      nama: "Rizky Maulana",
      src: MemberRizky,
      divisi: "Divisi Software",
      status: "Active",
      urlGit: "#",
      urlIG: "#",
      urlMail: "#",
      urlYT: "#",
    },
    {
      nama: "Siti Marwah",
      src: MemberMarwah,
      divisi: "Divisi Multimedia",
      status: "Active",
      urlGit: "#",
      urlIG: "#",
      urlMail: "#",
      urlYT: "#",
    },
    {
      nama: "Meita Sutra Safira",
      src: MemberMeita,
      divisi: "Divisi Mekanik",
      status: "Active",
      urlGit: "#",
      urlIG: "#",
      urlMail: "#",
      urlYT: "#",
    },
    {
      nama: "Guntur Aji Saputra",
      src: MemberGuntur,
      divisi: "Divisi Multimedia",
      status: "Active",
      urlGit: "#",
      urlIG: "#",
      urlMail: "#",
      urlYT: "#",
    },
    {
      nama: "Fahmi Afandi",
      src: MemberFahmi,
      divisi: "Divisi Mekanik",
      status: "Active",
      urlGit: "#",
      urlIG: "#",
      urlMail: "#",
      urlYT: "#",
    },
    {
      nama: "Iis Siti Aisyah",
      src: MemberIis,
      divisi: "Divisi Humas",
      status: "Active",
      urlGit: "#",
      urlIG: "#",
      urlMail: "#",
      urlYT: "#",
    },
    {
      nama: "Eviyanti",
      src: MemberEvi,
      divisi: "Divisi Humas",
      status: "Active",
      urlGit: "#",
      urlIG: "#",
      urlMail: "#",
      urlYT: "#",
    },
    {
      nama: "Husni Mubarok",
      src: MemberHusni,
      divisi: "Divisi Humas",
      status: "Active",
      urlGit: "#",
      urlIG: "#",
      urlMail: "#",
      urlYT: "#",
    },
    {
      nama: "Imam Arifin",
      src: MemberImam,
      divisi: "Divisi Networking",
      status: "Active",
      urlGit: "#",
      urlIG: "#",
      urlMail: "#",
      urlYT: "#",
    },
    {
      nama: "Rini Rosdiana Ningsih",
      src: MemberRini,
      divisi: "Divisi Multimedia",
      status: "Active",
      urlGit: "#",
      urlIG: "#",
      urlMail: "#",
      urlYT: "#",
    },
    {
      nama: "Risma Ardhani",
      src: MemberRisma,
      divisi: "Divisi Humas",
      status: "Active",
      urlGit: "#",
      urlIG: "#",
      urlMail: "#",
      urlYT: "#",
    },
    {
      nama: "Raka",
      src: MemberRaka,
      divisi: "Divisi Mekanik",
      status: "Active",
      urlGit: "#",
      urlIG: "#",
      urlMail: "#",
      urlYT: "#",
    },
  ];

  return (
    <section
      id="member"
      className="py-20 overflow-hidden bg-white dark:bg-slate-900 transition-500"
    >
      <div className="container transition-500">
        <SectionTitle titleLeft="Our" titleRight="Members" />
        <div className="flex flex-wrap justify-center px-5 pt-5 md:gap-12 transition-500">
          {data.slice(0, 3).map((item, index) => {
            return (
              <CardMember
                key={index}
                src={item.src}
                divisi={item.divisi}
                nama={item.nama}
                status={item.status}
                urlGit={item.urlGit}
                urlIG={item.urlIG}
                urlMail={item.urlMail}
                urlYT={item.urlYT}
              />
            );
          })}
        </div>
        <div
          className={`${
            !showMore
              ? "absolute scale-0 -z-50"
              : "flex flex-wrap justify-center px-5 pt-12 pb-5 md:gap-12"
          } transition-500`}
        >
          {data.slice(3).map((item, index) => {
            return (
              <CardMember
                key={index}
                src={item.src}
                divisi={item.divisi}
                nama={item.nama}
                status={item.status}
                urlGit={item.urlGit}
                urlIG={item.urlIG}
                urlMail={item.urlMail}
                urlYT={item.urlYT}
              />
            );
          })}
        </div>
        <div className="flex justify-center pt-10 lg:pt-20">
          <ButtonStructure
            title={showMore ? "Show Less" : "Show More"}
            onClick={() => setShowMore(!showMore)}
          />
        </div>
      </div>
    </section>
  );
};

export default Members;
