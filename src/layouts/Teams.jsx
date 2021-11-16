import React from "react";
import TeamsCard from "../components/cards/TeamsCard";

const Teams = () => {
    return (
        <div id="team" className="dark:bg-gray-800 duration-500">
            <div className="mx-auto md:container">
                <div align="center" className="mx-auto pt-24 dark:text-white text-5xl font-bold items-center justify-between">
                    <h1>Our Teams</h1>
                </div>
                <div className="md:mx-auto py-20 flex md:flex-row flex-col items-center justify-between">
                    <TeamsCard name="Al-Fatih Team" className="mb-3 md:mb-0" />
                    <TeamsCard name="Al-Khawarismi Team" className="mb-3 md:mb-0" />
                    <TeamsCard name="Heroes Team" className="mb-3 md:mb-0" />
                    <TeamsCard name="Al-Jazari Team" />
                </div>
            </div>

        </div>
    )
}

export default Teams;