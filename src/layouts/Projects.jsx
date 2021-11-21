import React, { useState } from "react";
import ProjectsButton from "../components/buttons/ProjectsButton";
import ProjectsCard from "../components/cards/ProjectsCard";

const Projects = () => {

    const [showMore, setShowMore] = useState(false);

    return (
        <div>
            <div id="project" className="z-30 bg-gradient-to-l from-blue-400 md:to-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-300  transition-color duration-500">
                <div className="xl:container mx-auto md:px-10">
                    <div align="center" className="mx-auto pt-24 text-5xl font-bold items-center justify-between">
                        <h1>Our Project</h1>
                    </div>
                    <div className="md:mx-auto pt-20 flex md:flex-row flex-col items-center justify-between">
                        <ProjectsCard />
                        <ProjectsCard />
                        <ProjectsCard />
                    </div>
                </div>
            </div>
            <div id="project" className={`${showMore ? "bg-gradient-to-l from-blue-400 md:to-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-300  transition-all transform duration-500" : "hidden"}`}>
                <div className="xl:container mx-auto md:px-10">
                    <div className="md:mx-auto pb-20 flex md:flex-row flex-col items-center justify-between">
                        <ProjectsCard />
                        <ProjectsCard />
                        <ProjectsCard />
                    </div>
                </div>
            </div>
            <div id="project" className={`${showMore ? "bg-gradient-to-l from-blue-400 md:to-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-300  transition-all transform duration-500" : "hidden"}`}>
                <div className="xl:container mx-auto md:px-10">
                    <div className="md:mx-auto pt-20 mt-10 flex md:flex-row flex-col items-center justify-between">
                        <ProjectsCard />
                        <ProjectsCard />
                        <ProjectsCard />
                    </div>
                    <div className="md:mx-auto pb-10 flex md:flex-row flex-col items-center justify-between">
                        <ProjectsCard />
                        <ProjectsCard />
                        <ProjectsCard />
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-l from-blue-400 md:to-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-300  transition-color duration-500">
                <div className="items-center justify-center w-full">
                    <div onClick={() => setShowMore(!showMore)} className="text-center pt-5 pb-10 md:pb-20">
                        <ProjectsButton name={`${!showMore ? "Show More" : "Show Less"}`} />
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Projects;