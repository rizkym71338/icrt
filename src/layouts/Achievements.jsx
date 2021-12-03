import React from "react";
import AchievementsCard from "../components/cards/AchievementsCard";
import HackathonYogyakarta from "../assets/achievement/hackathon-yogyakarta.png"
import MuslimHackfets from "../assets/achievement/muslim-hackfest.png"
import IOT from "../assets/achievement/internet-of-things.png"

const Achievements = () => {
    return (
        <div id="achievement" className="duration-500 xl:container mx-auto lg:px-10">
            <div align="center" className="lg:mx-auto lg:pt-24 pt-20 dark:text-gray-200 lg:text-5xl text-3xl font-bold items-center justify-between">
                <h1>Our Achievements</h1>
            </div>
            <div className="lg:mx-auto mx-5 lg:py-20 pt-10 flex lg:flex-row flex-col items-center justify-center">
                <div className="lg:w-1/2 w-full mx-auto">
                    <div className="mb-10 mx-auto">
                        <AchievementsCard
                        name="Yogyakarta,  19 Oktober 2018"
                        img={HackathonYogyakarta}
                        />
                    </div>
                    <div className="mb-10 mx-auto">
                        <AchievementsCard
                        name="Cirebon, 23 Januari - 31 Januari 2021"
                        img={MuslimHackfets}
                        />
                    </div>
                    <div className="mb-10 mx-auto">
                        <AchievementsCard
                        name="Cirebon, 30 maret  - 30 April 2021"
                        img={IOT}
                        />
                    </div>
                </div>                
                <div className="lg:w-1/2 lg:mx-10 w-full">
                    <div className="lg:mb-32 mb-8">
                        <span className="font-bold text-black text-xl dark:text-white">Hackathon Yogyakarta</span>
                        <p className="lg:text-lg text-sm text-gray-700 dark:text-gray-300 duration-500">
                            Lomba Hackathon Festival 2018 Jogja - Solo DILo (Digital Innovation Lounge) di Jogja Digital Valley pada tanggal 24-25 November 2018, dengan sebuah produk .....
                        </p>
                        <a href="/" className="text-blue-500 font-bold">Read More</a>
                    </div>
                    <div className="lg:mb-32 mb-8">
                        <span className="font-bold text-black text-xl dark:text-white">Muslim Hackfest</span>
                        <p className="lg:text-lg text-sm text-gray-700 dark:text-gray-300 duration-500">
                            Muslim Hackfest merupakan festival dan hackathon muslim virtual pertama di Indonesia yang ditujukan pada masyarakat Indonesia. Maka dari itu, kami memiliki Ide yang menjadi solusi atas permasalahan tersebut. Ide itu.....
                        </p>
                        <a href="/" className="text-blue-500 font-bold">Read More</a>
                    </div>
                    <div className="lg:mb-32 mb-8">
                        <span className="font-bold text-black text-xl dark:text-white">Kopiconcrete 2021 : Internet of Things Internasional Contest</span>
                        <p className="lg:text-lg text-sm text-gray-700 dark:text-gray-300 duration-500">
                            CIREBON – STMIK IKMI Cirebon kembali menorehkan prestasi baiknya dalam ajang kejuaraan Internasional kompetisi Kopertip Communication and Creativity Contest (KOPICONCRETE) 2021 dengan produk SMART-CARD.
                        </p>
                        <a href="/" className="text-blue-500 font-bold">Read More</a>
                    </div>
                </div>                
            </div>

        </div>
    )
}

export default Achievements;