import React from "react";
import ProjectsButton from "../components/buttons/ProjectsButton";
import StructuresCard from "../components/cards/StructuresCard";

const Structures = () => {
    return (
        <div id="structure" className="md:bg-gradient-to-l bg-gradient-to-t from-blue-400 md:to-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-300  transition-color duration-500">
            <div className="md:container mx-auto md:px-10">
                <div align="center" className="mx-auto pt-24 text-5xl font-bold items-center justify-between">
                    <h1>Our Structure</h1>
                </div>
                <div className="md:mx-auto pt-20 flex md:flex-row flex-col justify-center items-center">
                    <StructuresCard jabatan="Ketua" nama="Mochammad Fauzan F" jurusan="Teknik Informatika 2020" />
                    <StructuresCard jabatan="Wakil Ketua" nama="Wisnu Wijaya" jurusan="Teknik Informatika 2020" />
                </div>
                <div className="items-center justify-center w-full md:mt-10">
                    <div className="text-center pt-5 pb-10 md:pb-20">
                    <ProjectsButton name="Show More" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Structures;