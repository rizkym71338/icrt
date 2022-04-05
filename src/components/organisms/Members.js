import React from "react";
import { MemberFauzan, MemberRizky, MemberWisnu } from "../../assets";
import { CardMember, SectionTitle } from "../molecules";

const Members = () => {
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
  ];

  return (
    <section
      id="member"
      className="py-20 overflow-hidden bg-white dark:bg-slate-900 transition-500"
    >
      <div className="container transition-500">
        <SectionTitle titleLeft="Our" titleRight="Members" />
        <div className="flex flex-wrap justify-center md:gap-12 p-5 transition-500">
          {data.map((item, index) => {
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
      </div>
    </section>
  );
};

export default Members;
