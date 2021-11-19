import React, { useState } from "react";
import ProjectsButton from "../components/buttons/ProjectsButton";
import StructuresCard from "../components/cards/StructuresCard";

const Structures = () => {

    const [showMore, setShowMore] = useState(false);

    return (
        <div>
            <div id="structure" className="md:bg-gradient-to-l bg-gradient-to-t from-blue-400 md:to-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-300  transition-color duration-500">
                <div className="md:container mx-auto md:px-10">
                    <div align="center" className="mx-auto pt-24 text-5xl font-bold items-center justify-between">
                        <h1>Our Structure</h1>
                    </div>
                    <div className="md:mx-auto py-20 flex md:flex-row flex-col justify-center items-center">
                        <StructuresCard jabatan="Ketua" nama="Mochammad Fauzan F" jurusan="Teknik Informatika 2020" />
                        <StructuresCard jabatan="Wakil Ketua" nama="Wisnu Wijaya" jurusan="Teknik Informatika 2020" />
                    </div>                    
                </div>

            </div>
            <div className={`${showMore ? "md:bg-gradient-to-l bg-gradient-to-t from-blue-400 md:to-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-300  transition-color duration-500" : "hidden"}`}>
                <div align="center" className="mx-auto md:mt-10 pt-24 text-5xl font-bold items-center justify-between">
                    <h1>Kesekjenan</h1>
                </div>
                <div className="md:mx-auto py-20 flex md:flex-row flex-col justify-center items-center">
                    <StructuresCard jabatan="Sekretaris 1" nama="Siti Marwah" jurusan="Teknik Informatika 2020" />
                    <StructuresCard jabatan="Sekretaris 3" nama="Nursyifa Puspa Ar-Rahmi S" jurusan="Teknik Informatika 2020" />
                    <StructuresCard jabatan="Bendahara" nama="Meita Sutra Safira" jurusan="Teknik Informatika 2020" />
                </div>
            </div>
            <div className={`${showMore ? "md:bg-gradient-to-l bg-gradient-to-t from-blue-400 md:to-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-300  transition-color duration-500" : "hidden"}`}>
                <div align="center" className="mx-auto md:mt-10 pt-24 text-5xl font-bold items-center justify-between">
                    <h1>Divisi</h1>
                </div>
                <div className="md:mx-auto pt-20 flex md:flex-row flex-col justify-center items-center">
                    <StructuresCard jabatan="Divisi Mekanik" nama="Mochammad Fauzan F" jurusan="Teknik Informatika 2020" />
                    <StructuresCard jabatan="Divisi Mekanik" nama="Meita Sutra Safira" jurusan="Teknik Informatika 2020" />
                </div>
                <div className="md:mx-auto py-20 flex md:flex-row flex-col justify-center items-center">
                    <StructuresCard jabatan="Divisi Mekanik" nama="Azhar" jurusan="Teknik Informatika 2020" />
                    <StructuresCard jabatan="Divisi Mekanik" nama="Fahmi Afandi" jurusan="Teknik Informatika 2020" />
                    <StructuresCard jabatan="Divisi Mekanik" nama="Oom Muharromah" jurusan="Teknik Informatika 2020" />
                </div>
            </div>
            <div className={`${showMore ? "md:bg-gradient-to-l bg-gradient-to-t from-blue-400 md:to-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-300  transition-color duration-500" : "hidden"}`}>
                <div className="md:mx-auto mt-10 py-20 flex md:flex-row flex-col justify-center items-center">
                    <StructuresCard jabatan="Divisi Software" nama="Rizky Maulana" jurusan="Teknik Informatika 2020" />
                    <StructuresCard jabatan="Divisi Software" nama="Ridwan Firdaus" jurusan="Teknik Informatika 2020" />
                </div>
            </div>
            <div className={`${showMore ? "md:bg-gradient-to-l bg-gradient-to-t from-blue-400 md:to-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-300  transition-color duration-500" : "hidden"}`}>
                <div className="md:mx-auto mt-10 py-20 flex md:flex-row flex-col justify-center items-center">
                    <StructuresCard jabatan="Divisi Multimedia" nama="Nursyifa Puspa Ar-Rahmi S" jurusan="Teknik Informatika 2020" />
                    <StructuresCard jabatan="Divisi Multimedia" nama="Siti Marwah" jurusan="Teknik Informatika 2020" />
                    <StructuresCard jabatan="Divisi Multimedia" nama="Rini Rosdiana Ningsih" jurusan="Teknik Informatika 2020" />
                </div>
            </div>
            <div className={`${showMore ? "md:bg-gradient-to-l bg-gradient-to-t from-blue-400 md:to-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-300  transition-color duration-500" : "hidden"}`}>
                <div className="md:mx-auto mt-10 pt-20 flex md:flex-row flex-col justify-center items-center">
                    <StructuresCard jabatan="Divisi Humas" nama="Husni Mubarok" jurusan="Teknik Informatika 2020" />
                    <StructuresCard jabatan="Divisi Humas" nama="Iis Siti Aisyah" jurusan="Teknik Informatika 2020" />
                </div>
                <div className="md:mx-auto mt-10 pb-20 flex md:flex-row flex-col justify-center items-center">
                    <StructuresCard jabatan="Divisi Humas" nama="Eviyanti" jurusan="Teknik Informatika 2020" />
                    <StructuresCard jabatan="Divisi Humas" nama="Risma Ardhani" jurusan="Teknik Informatika 2020" />
                </div>
            </div>
            <div className={`${showMore ? "md:bg-gradient-to-l bg-gradient-to-t from-blue-400 md:to-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-300  transition-color duration-500" : "hidden"}`}>
                <div className="md:mx-auto mt-10 py-20 flex md:flex-row flex-col justify-center items-center">
                    <StructuresCard jabatan="Divisi Networking" nama="Wisnu Wijaya" jurusan="Teknik Informatika 2020" />
                    <StructuresCard jabatan="Divisi Networking" nama="Imam Arifin" jurusan="Teknik Informatika 2020" />
                </div>
            </div>
            <div className="md:bg-gradient-to-l bg-gradient-to-t from-blue-400 md:to-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-300  transition-color duration-500">
                <div className="items-center justify-center w-full">
                    <div onClick={() => setShowMore(!showMore)} className="text-center pt-5 pb-10 md:pb-20">
                        <ProjectsButton name={`${!showMore ? "Show More" : "Show Less"}`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Structures;