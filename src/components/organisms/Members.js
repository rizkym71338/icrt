import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
import { CardMember, SectionTitle } from "../molecules";

const Members = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1200, min: 720 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 720, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <button
        className="absolute right-0 mr-3 top-50"
        onClick={() => onClick()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-blue-500 transition-all duration-300 ease-out transform bg-white rounded-full hover:bg-blue-500 hover:text-white dark:hover:text-gray-800 dark:bg-gray-800 dark:hover:bg-blue-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    );
  };

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <button className="absolute left-0 ml-3 top-50" onClick={() => onClick()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-blue-500 transition-all duration-300 ease-out transform bg-white rounded-full hover:bg-blue-500 hover:text-white dark:hover:text-gray-800 dark:bg-gray-800 dark:hover:bg-blue-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    );
  };

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
        <Carousel
          className="py-5"
          containerClass="carousel-container"
          responsive={responsive}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          infinite
        >
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
        </Carousel>
      </div>
    </section>
  );
};

export default Members;
