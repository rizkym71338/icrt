import React, { useState } from "react";
import ProjectsButton from "../components/buttons/ProjectsButton";
import StructuresCard from "../components/cards/StructuresCard";

import Fauzan from "../assets/structure/fauzan.png";
import Wisnu from "../assets/structure/wisnu.png";
import Marwah from "../assets/structure/marwah.png";
import Meita from "../assets/structure/meita.png";
import Fahmi from "../assets/structure/fahmi.png";
import Rizky from "../assets/structure/rizky.png";
import Rini from "../assets/structure/rini.png";
import Husni from "../assets/structure/husni.png";
import Iis from "../assets/structure/iis.png";
import Risma from "../assets/structure/risma.png";
import Imam from "../assets/structure/imam.png";

const Structures = () => {

    const [showMore, setShowMore] = useState(false);

    const Default = <svg className="w-full h-full fill-current text-white dark:text-gray-800 rounded-full" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M298.986 270.285C283.364 253.358 264.406 239.851 243.306 230.612C222.207 221.373 199.423 216.603 176.389 216.603C153.355 216.603 130.571 221.373 109.471 230.612C88.3718 239.851 69.4138 253.358 53.7917 270.285C51.3797 272.952 50.0306 276.411 50 280.007V338.34C50.0511 342.174 51.6101 345.834 54.3395 348.527C57.0689 351.22 60.749 352.73 64.5833 352.729H288.194C292.062 352.729 295.772 351.193 298.506 348.458C301.241 345.723 302.778 342.014 302.778 338.146V279.813C302.7 276.284 301.354 272.902 298.986 270.285V270.285Z"/>
                        <path d="M176.417 197.111C214.003 197.111 244.473 166.642 244.473 129.056C244.473 91.4695 214.003 61 176.417 61C138.831 61 108.362 91.4695 108.362 129.056C108.362 166.642 138.831 197.111 176.417 197.111Z"/>
                    </svg>

    return (
        <div>
            <div id="structure" className="bg-gradient-to-l from-blue-400 lg:to-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-300  transition-color duration-500">
                <div className="xl:container mx-auto lg:px-10">
                    <div align="center" className="mx-auto pt-24 lg:text-5xl text-4xl font-bold items-center justify-between">
                        <h1>Our Structure</h1>
                    </div>
                    <div className="lg:mx-auto py-20 flex lg:flex-row flex-col justify-center items-center">
                        <StructuresCard
                        jabatan="Ketua"
                        nama="Mochammad Fauzan F"
                        jurusan="Teknik Informatika 2020"
                        src={Fauzan}
                        />
                        <StructuresCard
                        jabatan="Wakil Ketua"
                        nama="Wisnu Wijaya"
                        jurusan="Teknik Informatika 2020"
                        src={Wisnu}
                        />
                    </div>                    
                </div>

            </div>
            <div className={`${showMore ? "bg-gradient-to-l from-blue-400 lg:to-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-300  transition-color duration-500" : "overflow-hidden h-0 opacity-0 transition-all ease-in-out duration-500"}`}>
                <div align="center" className="mx-auto mt-10 pt-24 text-5xl font-bold items-center justify-between">
                    <h1>Kesekjenan</h1>
                </div>
                <div className="lg:mx-auto py-20 flex lg:flex-row flex-col justify-center items-center">
                    <StructuresCard
                    jabatan="Sekretaris 1"
                    nama="Siti Marwah"
                    jurusan="Teknik Informatika 2020"
                    src={Marwah}
                    />
                    <StructuresCard
                    jabatan="Sekretaris 2"
                    nama="Nursyifa Puspa Ar-Rahmi S"
                    jurusan="Teknik Informatika 2020"
                    hidden="hidden"
                    svg={Default}
                    />
                    <StructuresCard
                    jabatan="Bendahara"
                    nama="Meita Sutra Safira"
                    jurusan="Teknik Informatika 2020"
                    src={Meita}
                    />
                </div>
            </div>
            <div className={`${showMore ? "bg-gradient-to-l from-blue-400 lg:to-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-300  transition-color duration-500" : "overflow-hidden h-0 opacity-0 transition-all ease-in-out duration-500"}`}>
                <div align="center" className="mx-auto mt-10 pt-24 text-5xl font-bold items-center justify-between">
                    <h1>Divisi</h1>
                </div>
                <div className="lg:mx-auto pt-20 flex lg:flex-row flex-col justify-center items-center">
                    <StructuresCard
                    jabatan="Divisi Mekanik"
                    nama="Mochammad Fauzan F"
                    jurusan="Teknik Informatika 2020"
                    src={Fauzan}
                    />
                    <StructuresCard
                    jabatan="Divisi Mekanik"
                    nama="Meita Sutra Safira"
                    jurusan="Teknik Informatika 2020"
                    src={Meita}
                    />
                </div>
                <div className="lg:mx-auto py-20 flex lg:flex-row flex-col justify-center items-center">
                    <StructuresCard
                    jabatan="Divisi Mekanik"
                    nama="Azhar"
                    jurusan="Teknik Informatika 2020"
                    hidden="hidden"
                    svg={Default}
                    />
                    <StructuresCard
                    jabatan="Divisi Mekanik"
                    nama="Fahmi Afandi"
                    jurusan="Teknik Informatika 2020"
                    src={Fahmi}
                    />
                    <StructuresCard
                    jabatan="Divisi Mekanik"
                    nama="Oom Muharromah"
                    jurusan="Teknik Informatika 2020"
                    hidden="hidden"
                    svg={Default}
                    />
                </div>
            </div>
            <div className={`${showMore ? "bg-gradient-to-l from-blue-400 lg:to-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-300  transition-color duration-500" : "overflow-hidden h-0 opacity-0 transition-all ease-in-out duration-500"}`}>
                <div className="lg:mx-auto mt-10 py-20 flex lg:flex-row flex-col justify-center items-center">
                    <StructuresCard
                    jabatan="Divisi Software"
                    nama="Rizky Maulana"
                    jurusan="Teknik Informatika 2020"
                    src={Rizky}
                    />
                    <StructuresCard
                    jabatan="Divisi Software"
                    nama="Ridwan Firdaus"
                    jurusan="Teknik Informatika 2020"
                    hidden="hidden"
                    svg={Default}
                    />
                </div>
            </div>
            <div className={`${showMore ? "bg-gradient-to-l from-blue-400 lg:to-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-300  transition-color duration-500" : "overflow-hidden h-0 opacity-0 transition-all ease-in-out duration-500"}`}>
                <div className="lg:mx-auto mt-10 py-20 flex lg:flex-row flex-col justify-center items-center">
                    <StructuresCard
                    jabatan="Divisi Multimedia"
                    nama="Nursyifa Puspa Ar-Rahmi S"
                    jurusan="Teknik Informatika 2020"
                    hidden="hidden"
                    svg={Default}
                    />
                    <StructuresCard
                    jabatan="Divisi Multimedia"
                    nama="Siti Marwah"
                    jurusan="Teknik Informatika 2020"
                    src={Marwah}
                    />
                    <StructuresCard
                    jabatan="Divisi Multimedia"
                    nama="Rini Rosdiana Ningsih"
                    jurusan="Teknik Informatika 2020"
                    src={Rini}
                    />
                </div>
            </div>
            <div className={`${showMore ? "bg-gradient-to-l from-blue-400 lg:to-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-300  transition-color duration-500" : "overflow-hidden h-0 opacity-0 transition-all ease-in-out duration-500"}`}>
                <div className="lg:mx-auto mt-10 pt-20 flex lg:flex-row flex-col justify-center items-center">
                    <StructuresCard
                    jabatan="Divisi Humas"
                    nama="Husni Mubarok"
                    jurusan="Teknik Informatika 2020"
                    src={Husni}
                    />
                    <StructuresCard
                    jabatan="Divisi Humas"
                    nama="Iis Siti Aisyah"
                    jurusan="Teknik Informatika 2020"
                    src={Iis}
                    />
                </div>
                <div className="lg:mx-auto mt-10 pb-20 flex lg:flex-row flex-col justify-center items-center">
                    <StructuresCard
                    jabatan="Divisi Humas"
                    nama="Eviyanti"
                    jurusan="Teknik Informatika 2020"
                    hidden="hidden"
                    svg={Default}
                    />
                    <StructuresCard
                    jabatan="Divisi Humas"
                    nama="Risma Ardhani"
                    jurusan="Teknik Informatika 2020"
                    src={Risma}
                    />
                </div>
            </div>
            <div className={`${showMore ? "bg-gradient-to-l from-blue-400 lg:to-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-300  transition-color duration-500" : "hidden"}`}>
                <div className="lg:mx-auto mt-10 py-20 flex lg:flex-row flex-col justify-center items-center">
                    <StructuresCard
                    jabatan="Divisi Networking"
                    nama="Wisnu Wijaya"
                    jurusan="Teknik Informatika 2020"
                    src={Wisnu}
                    />
                    <StructuresCard
                    jabatan="Divisi Networking"
                    nama="Imam Arifin"
                    jurusan="Teknik Informatika 2020"
                    src={Imam}
                    />
                </div>
            </div>
            <div className="bg-gradient-to-l from-blue-400 lg:to-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-300  transition-color duration-500">
                <div className="items-center justify-center">
                    <div onClick={() => setShowMore(!showMore)} className="text-center pt-5 pb-10 lg:pb-20">
                        <ProjectsButton name={`${!showMore ? "Show More" : "Show Less"}`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Structures;