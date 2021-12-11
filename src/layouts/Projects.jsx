import React, { useState } from "react";
import ProjectsButton from "../components/buttons/ProjectsButton";
import ProjectsCard from "../components/cards/ProjectsCard";
import smartCard from "../assets/project/smart-card.png"

const Projects = () => {

    const [showMore, setShowMore] = useState(false);

    return (
        <div>
            <div id="project" className="z-30 bg-gradient-to-l from-blue-400 lg:to-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-300  transition-color duration-500 overflow-hidden">
                <div className="xl:container mx-auto lg:px-10">
                    <div align="center" className="mx-auto lg:pt-24 pt-20 lg:text-5xl text-3xl font-bold items-center justify-between">
                        <h1>Our Project</h1>
                    </div>
                    <div className="lg:mx-auto lg:pt-20 pt-10 flex lg:flex-row flex-col items-center justify-center lg:space-x-10">
                        <div data-aos="zoom-in-right">
                            <ProjectsCard
                                name="Smart Card"
                                img={smartCard}
                            />
                        </div>
                        <div data-aos="zoom-in">
                            <ProjectsCard name="Smart Angklung" />
                        </div>
                        <div data-aos="zoom-in-left">
                            <ProjectsCard name="Spider Bot" />
                        </div>
                    </div>
                    <div className={`${showMore ? "lg:mx-auto pb-10 flex lg:flex-row flex-col " : "overflow-hidden  opacity-0 h-0 w-0"} items-center justify-center lg:space-x-10 transition-all ease-in-out duration-500 `}>
                        <ProjectsCard />
                        <ProjectsCard />
                        <ProjectsCard />
                    </div>
                </div>
            </div>
            <div id="project" className={`${showMore ? "bg-gradient-to-l from-blue-400 lg:to-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-300  transition-all transform duration-500" : "hidden"}`}>
                <div className="container mx-auto lg:px-10">
                    <div className="lg:mx-auto pt-20 mt-10 flex lg:flex-row flex-col items-center justify-center lg:space-x-10">
                        <ProjectsCard />
                        <ProjectsCard />
                        <ProjectsCard />
                    </div>
                    <div id="showlessProject" className="lg:mx-auto pb-10 flex lg:flex-row flex-col items-center justify-center lg:space-x-10">
                        <ProjectsCard />
                        <ProjectsCard />
                        <ProjectsCard />
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-l from-blue-400 lg:to-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-300  transition-color duration-500">
                <div className="items-center justify-center">
                    <div className="text-center pt-5 pb-10 lg:pb-20">
                        <a onClick={() => setShowMore(!showMore)}>
                            <ProjectsButton name={`${!showMore ? "Show More" : "Show Less"}`} />
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <a href="#showlessProject" className={`${!showMore ? "fixed h-0 w-0 opacity-0" : "z-40 fixed bottom-0 right-0 lg:m-10 m-5"} transform transition-all ease-in-out duration-500`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`${!showMore ? "opacity-0" : ""} lg:h-14 lg:w-14 h-10 w-10 shadow-xl bg-white dark:bg-gray-800 text-blue-500 rounded-full lg:px-3 px-2`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default Projects;