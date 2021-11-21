import React from "react";
import AchievementsCard from "../components/cards/AchievementsCard";

const Achievements = () => {
    return (
        <div id="achievement" className="duration-500 xl:container mx-auto lg:px-10">
            <div align="center" className="lg:mx-auto pt-24 dark:text-white text-5xl font-bold items-center justify-between">
                <h1>Our Achievements</h1>
            </div>
            <div className="lg:mx-auto mx-5 py-20 flex lg:flex-row flex-col items-center justify-center">
                <div className="lg:w-1/2 w-full mx-auto">
                    <div className="mb-10 mx-auto">
                        <AchievementsCard name="Yogyakarta,  19 Oktober 2018" />
                    </div>
                    <div className="mb-10 mx-auto">
                        <AchievementsCard name="Cirebon, 23 Januari - 31 Januari 2021" />
                    </div>
                    <div className="mb-10 mx-auto">
                        <AchievementsCard name="Cirebon, 30 maret  - 30 April 2021" />
                    </div>
                </div>                
                <div className="lg:w-1/2 lg:mx-10 w-full">
                    <div className="lg:mb-32 mb-8">
                    <span className="font-bold text-black text-xl dark:text-white">Hackathon Yogyakarta</span>
                    <p className="lg:text-lg text-sm text-gray-700 dark:text-gray-300 duration-500">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis optio a eaque sint repellendus velit deleniti dolorem iure laborum obcaecati, soluta, eligendi nisi, autem provident assumenda? Reiciendis, quisquam! Rerum, quaerat?
                    </p>
                    </div>
                    <div className="lg:mb-32 mb-8">
                    <span className="font-bold text-black text-xl dark:text-white">Muslim Hackfest</span>
                    <p className="lg:text-lg text-sm text-gray-700 dark:text-gray-300 duration-500">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis optio a eaque sint repellendus velit deleniti dolorem iure laborum obcaecati, soluta, eligendi nisi, autem provident assumenda? Reiciendis, quisquam! Rerum, quaerat?
                    </p>
                    </div>
                    <div className="lg:mb-32 mb-8">
                    <span className="font-bold text-black text-xl dark:text-white">Kopiconcrete 2021 : Internet of Things Internasional Contest</span>
                    <p className="lg:text-lg text-sm text-gray-700 dark:text-gray-300 duration-500">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis optio a eaque sint repellendus velit deleniti dolorem iure laborum obcaecati, soluta, eligendi nisi, autem provident assumenda? Reiciendis, quisquam! Rerum, quaerat?
                    </p>
                    </div>
                </div>                
            </div>

        </div>
    )
}

export default Achievements;