import React from "react";
import MembersSlider from "../components/sliders/MembersSlider";

const Members = () => {
    return (
        <div id="member" className="dark:bg-gray-800 w-full">
            <div className="mx-16 py-20">
                <div align="center" className="py-8 mb-10 dark:text-white text-5xl font-bold items-center justify-between">
                    <h1>Our Members</h1>
                </div>
                <div className="w-16">
                    <MembersSlider />
                </div>
            </div>

        </div>
    )
}

export default Members;