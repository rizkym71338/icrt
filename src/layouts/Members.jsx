import React from "react";
import MembersSlider from "../components/sliders/MembersSlider";

const Members = () => {
    return (
        <div id="member" className="dark:bg-gray-800 w-full">
            <div className="container mx-auto lg:py-20 pt-10">
                <div align="center" className="lg:py-8 pt-8 lg:mb-5 dark:text-gray-300 lg:text-5xl text-3xl font-bold items-center justify-between">
                    <h1>Our Members</h1>
                </div>
                <div className="w-full">
                    <MembersSlider />
                </div>
            </div>

        </div>
    )
}

export default Members;