import React from "react";
import TeamsCard from "../components/cards/TeamsCard";
import AlFatih from "../assets/img/alfatih.png";
import AlKhawarizmi from "../assets/img/alkhawarizmi.png";
import Heroes from "../assets/img/heroes.png";
import AlJazari from "../assets/img/aljazari.png";

const Teams = () => {
    return (
        <div id="team" className="dark:bg-gray-800 duration-500">
            <div className="mx-auto md:container md:px-10">
                <div align="center" className="mx-auto pt-24 dark:text-white text-5xl font-bold items-center justify-between">
                    <h1>Our Teams</h1>
                </div>
                <div className="md:mx-auto py-20 flex md:flex-row flex-col items-center justify-between">
                    <TeamsCard img={AlFatih} name="Al-Fatih Team" className="mb-3 md:mb-0" />
                    <TeamsCard img={AlKhawarizmi} name="Al-Khawarismi Team" className="mb-3 md:mb-0" />
                    <TeamsCard img={Heroes} name="Heroes Team" className="mb-3 md:mb-0" />
                    <TeamsCard img={AlJazari} name="Al-Jazari Team" />
                </div>
            </div>

        </div>
    )
}

export default Teams;