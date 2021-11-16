import React from "react";
import AchievementsCard from "../components/cards/AchievementsCard";

const Achievements = () => {
    return (
        <div id="achievement" className="dark:bg-gray-800 duration-500 md:container mx-auto">
            <div align="center" className="md:mx-auto pt-24 dark:text-white text-5xl font-bold items-center justify-between">
                <h1>Our Achievements</h1>
            </div>
            <div className="md:mx-auto mx-5 py-20 flex md:flex-row flex-col items-center justify-between">
                <div className="md:w-1/2 w-full">
                    <div className="mb-10">
                        <AchievementsCard name="Yogyakarta,  19 Oktober 2018" />
                    </div>
                    <div className="mb-10">
                        <AchievementsCard name="Cirebon, 23 Januari - 31 Januari 2021" />
                    </div>
                    <div className="mb-10">
                        <AchievementsCard name="Cirebon, 30 maret  - 30 April 2021" />
                    </div>
                </div>                
                <div className="md:w-1/2 md:mx-10 w-full">
                    <div className="md:mb-32 mb-8">
                    <span className="font-bold text-black text-xl dark:text-white">Hackathon Yogyakarta</span>
                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 duration-500">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis optio a eaque sint repellendus velit deleniti dolorem iure laborum obcaecati, soluta, eligendi nisi, autem provident assumenda? Reiciendis, quisquam! Rerum, quaerat?
                    </p>
                    </div>
                    <div className="md:mb-32 mb-8">
                    <span className="font-bold text-black text-xl dark:text-white">Muslim Hackfest</span>
                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 duration-500">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis optio a eaque sint repellendus velit deleniti dolorem iure laborum obcaecati, soluta, eligendi nisi, autem provident assumenda? Reiciendis, quisquam! Rerum, quaerat?
                    </p>
                    </div>
                    <div className="md:mb-32 mb-8">
                    <span className="font-bold text-black text-xl dark:text-white">Kopiconcrete 2021 : Internet of Things Internasional Contest</span>
                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 duration-500">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis optio a eaque sint repellendus velit deleniti dolorem iure laborum obcaecati, soluta, eligendi nisi, autem provident assumenda? Reiciendis, quisquam! Rerum, quaerat?
                    </p>
                    </div>
                </div>                
            </div>

        </div>
    )
}

export default Achievements;