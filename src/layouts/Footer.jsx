import React from "react";
import { Github, Gmail, Instagram, Youtube } from "../assets/svg";

const Footer = () => {

    return (
        <div>

            <div className="text-white items-center justify-center py-20 bg-gray-100 dark:bg-black">
                <div className="flex flex-row w-60 mx-auto justify-between items-center">
                    <div className="w-10 flex justify-center items-center">
                        <a target="_blank" href="https://github.com/ICRT-dev" className="hover:scale-105 transform transition-all duration-300">
                            {Github}
                        </a>
                    </div>
                    <div className="w-10 flex justify-center items-center">
                        <a target="_blank" href="https://www.instagram.com/icrtikmi/" className="hover:scale-105 transform transition-all duration-300">
                            {Instagram}
                        </a>
                    </div>
                    <div className="w-10 flex justify-center items-center">
                        <a target="_blank" href="mailto:robotikaikmi90@gmail.com" className="hover:scale-105 transform transition-all duration-300">
                            {Gmail}
                        </a>
                    </div>
                    <div className="w-10 flex justify-center items-center">
                        <a target="_blank" href="https://www.youtube.com/channel/UCAAVVbKYuAPeqA-J84J6nnA" className="hover:scale-105 transform transition-all duration-300">
                            {Youtube}
                        </a>
                    </div>
                </div>
                <div className="items-center justify-center text-center text-black dark:text-gray-400 md:text-lg text-xs mt-10">
                    <p>&copy; 2021 All Right Reversed  -  Design by UI/UX Team ICRT</p>
                </div>
            </div>

        </div>
    )
}

export default Footer;