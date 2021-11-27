import React, { useState } from "react";
import ProjectsButton from "../components/buttons/ProjectsButton";
import StructuresCard from "../components/cards/StructuresCard";

import Fauzan from "../assets/structure/fauzan.png";
import Wisnu from "../assets/structure/wisnu.png";

const Structures = () => {

    const [showMore, setShowMore] = useState(false);

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
                    <StructuresCard jabatan="Sekretaris 1" nama="Siti Marwah" jurusan="Teknik Informatika 2020" />
                    <StructuresCard jabatan="Sekretaris 2" nama="Nursyifa Puspa Ar-Rahmi S" jurusan="Teknik Informatika 2020" />
                    <StructuresCard jabatan="Bendahara" nama="Meita Sutra Safira" jurusan="Teknik Informatika 2020" />
                </div>
            </div>
            <div className={`${showMore ? "bg-gradient-to-l from-blue-400 lg:to-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-300  transition-color duration-500" : "overflow-hidden h-0 opacity-0 transition-all ease-in-out duration-500"}`}>
                <div align="center" className="mx-auto mt-10 pt-24 text-5xl font-bold items-center justify-between">
                    <h1>Divisi</h1>
                </div>
                <div className="lg:mx-auto pt-20 flex lg:flex-row flex-col justify-center items-center">
                    <StructuresCard jabatan="Divisi Mekanik" nama="Mochammad Fauzan F" jurusan="Teknik Informatika 2020" />
                    <StructuresCard jabatan="Divisi Mekanik" nama="Meita Sutra Safira" jurusan="Teknik Informatika 2020" />
                </div>
                <div className="lg:mx-auto py-20 flex lg:flex-row flex-col justify-center items-center">
                    <StructuresCard jabatan="Divisi Mekanik" nama="Azhar" jurusan="Teknik Informatika 2020" />
                    <StructuresCard jabatan="Divisi Mekanik" nama="Fahmi Afandi" jurusan="Teknik Informatika 2020" />
                    <StructuresCard jabatan="Divisi Mekanik" nama="Oom Muharromah" jurusan="Teknik Informatika 2020" />
                </div>
            </div>
            <div className={`${showMore ? "bg-gradient-to-l from-blue-400 lg:to-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-300  transition-color duration-500" : "overflow-hidden h-0 opacity-0 transition-all ease-in-out duration-500"}`}>
                <div className="lg:mx-auto mt-10 py-20 flex lg:flex-row flex-col justify-center items-center">
                    <StructuresCard jabatan="Divisi Software" nama="Rizky Maulana" jurusan="Teknik Informatika 2020" />
                    <StructuresCard jabatan="Divisi Software" nama="Ridwan Firdaus" jurusan="Teknik Informatika 2020" />
                </div>
            </div>
            <div className={`${showMore ? "bg-gradient-to-l from-blue-400 lg:to-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-300  transition-color duration-500" : "overflow-hidden h-0 opacity-0 transition-all ease-in-out duration-500"}`}>
                <div className="lg:mx-auto mt-10 py-20 flex lg:flex-row flex-col justify-center items-center">
                    <StructuresCard jabatan="Divisi Multimedia" nama="Nursyifa Puspa Ar-Rahmi S" jurusan="Teknik Informatika 2020" />
                    <StructuresCard jabatan="Divisi Multimedia" nama="Siti Marwah" jurusan="Teknik Informatika 2020" />
                    <StructuresCard jabatan="Divisi Multimedia" nama="Rini Rosdiana Ningsih" jurusan="Teknik Informatika 2020" />
                </div>
            </div>
            <div className={`${showMore ? "bg-gradient-to-l from-blue-400 lg:to-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-300  transition-color duration-500" : "overflow-hidden h-0 opacity-0 transition-all ease-in-out duration-500"}`}>
                <div className="lg:mx-auto mt-10 pt-20 flex lg:flex-row flex-col justify-center items-center">
                    <StructuresCard jabatan="Divisi Humas" nama="Husni Mubarok" jurusan="Teknik Informatika 2020" />
                    <StructuresCard jabatan="Divisi Humas" nama="Iis Siti Aisyah" jurusan="Teknik Informatika 2020" />
                </div>
                <div className="lg:mx-auto mt-10 pb-20 flex lg:flex-row flex-col justify-center items-center">
                    <StructuresCard jabatan="Divisi Humas" nama="Eviyanti" jurusan="Teknik Informatika 2020" />
                    <StructuresCard jabatan="Divisi Humas" nama="Risma Ardhani" jurusan="Teknik Informatika 2020" />
                </div>
            </div>
            <div className={`${showMore ? "bg-gradient-to-l from-blue-400 lg:to-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-300  transition-color duration-500" : "hidden"}`}>
                <div className="lg:mx-auto mt-10 py-20 flex lg:flex-row flex-col justify-center items-center">
                    <StructuresCard jabatan="Divisi Networking" nama="Wisnu Wijaya" jurusan="Teknik Informatika 2020" />
                    <StructuresCard jabatan="Divisi Networking" nama="Imam Arifin" jurusan="Teknik Informatika 2020" />
                </div>
            </div>
            <div className="bg-gradient-to-l from-blue-400 lg:to-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-300  transition-color duration-500">
                <div className="items-center justify-center w-full">
                    <div onClick={() => setShowMore(!showMore)} className="text-center pt-5 pb-10 lg:pb-20">
                        <ProjectsButton name={`${!showMore ? "Show More" : "Show Less"}`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Structures;