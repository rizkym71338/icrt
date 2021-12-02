import React, { useState } from "react";
import DarkMode from "../darkmode/DarkMode";
import Logo from "../../assets/svg/icrt.svg";

const IndexNavbar = () => {

    const [colorTheme, setTheme] = DarkMode();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="z-50 duration-500 antialiased lg:shadow-xl lg:bg-white fixed lg:dark:bg-gray-800 w-full">
            <div className="flex flex-col lg:flex-row mx-auto justify-between w-full xl:container">
                <div className="flex justify-between items-center lg:dark:bg-transparent lg:bg-transparent dark:bg-gray-800 shadow-xl lg:shadow-none bg-white px-6 py-2 lg:py-0">
                    <div className="lg:h-14 h-10">
                        <a href="/">
                                <img src={Logo} alt="icrt" className="W-full h-full" />
                        </a>
                    </div>
                    <di>
                        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none lg:hidden block">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path className={!isOpen ? 'block dark:text-gray-100 transition-all duration-300' : ' opacity-0 scale-0 transition-all ease-out duration-300'} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                                <path className={isOpen ? 'block dark:text-gray-100 transition-all duration-300' : ' opacity-0 scale-0 transition-all ease-out duration-300'} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </di>
                </div>
            

                <div className={`${isOpen ? 'block lg:dark:bg-transparent lg:bg-transparent dark:bg-gray-800 bg-white rounded-xl' : 'h-0 lg:h-full lg:-translate-y-0 -translate-y-full scale-0 lg:scale-100'} lg:flex flex-col lg:flex-row lg:justify-end lg:w-full mx-5 mt-3 lg:mt-0 transform transition-all ease-out duration-300`}>
                    <div className={`${!isOpen ? "opacity-0 lg:opacity-100" : ""} flex flex-col lg:flex-row lg:mr-5 pt-5 lg:pt-0 `}>
                        <a href="/" className="block py-0 pb-3 lg:py-4 px-5 lg:border-b-4 border-transparent duration-300 hover:border-blue-500 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-500">Home</a>
                        <a onClick={() => setIsOpen(!isOpen)} href="#team" className="block py-0 pb-3 lg:py-4 px-5 lg:border-b-4 border-transparent duration-300 hover:border-blue-500 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-500">Team</a>
                        <a onClick={() => setIsOpen(!isOpen)} href="#structure" className="block py-0 pb-3 lg:py-4 px-5 lg:border-b-4 border-transparent duration-300 hover:border-blue-500 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-500">Structure</a>
                        <a onClick={() => setIsOpen(!isOpen)} href="#member" className="block py-0 pb-3 lg:py-4 px-5 lg:border-b-4 border-transparent duration-300 hover:border-blue-500 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-500">Member</a>
                        <a onClick={() => setIsOpen(!isOpen)} href="#project" className="block py-0 pb-3 lg:py-4 px-5 lg:border-b-4 border-transparent duration-300 hover:border-blue-500 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-500">Project</a>
                        <a onClick={() => setIsOpen(!isOpen)} href="#achievement" className="block py-0 pb-3 lg:py-4 px-5 lg:border-b-4 border-transparent duration-300 hover:border-blue-500 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-500">Achievement</a>
                        <a onClick={() => setIsOpen(!isOpen)} href="#contact" className="block py-0 pb-3 lg:py-4 px-5 lg:border-b-4 border-transparent duration-300 hover:border-blue-500 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-500">Contact</a>
                    </div>
                    <div onClick={() => setIsOpen(!isOpen)} className={`${!isOpen ? "opacity-0 lg:opacity-100" : ""} flex lg:flex-row justify-center `}>
                        <div onClick={() => setTheme(colorTheme)} className="block py-0 pb-5 lg:pb-3 lg:py-4 px-2 duration-500 text-gray-700">
                            {colorTheme === "light" ?
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:hover:text-blue-500 dark:text-gray-100 transition duration-300" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-blue-500 text-gray-700 transition duration-300" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
                            </svg> }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndexNavbar;