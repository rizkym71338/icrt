import { Transition } from "@headlessui/react";
import React from "react";

const IndexNavbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="transition ease-out duration-500 antialiased fixed bg-white flex flex-col md:flex-row w-full">
            <div className="flex flex-col md:flex-row md:mx-16 mx-5 justify-between md:w-full">
                <div className="flex justify-between items-center px-4 py-2 md:py-0">
                    <div>
                        <a href="#" className="uppercase font-bold text-blue-500">icrt</a>
                    </div>
                    <di>
                        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none lg:hidden block">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path className={!isOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                                <path className={isOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <Transition
                            show={isOpen}
                            enter="transition-opacity duration-75"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0">
                        </Transition>
                    </di>
                </div>
            

                <div className={`${isOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row md:justify-end md:w-full mx-5`}>
                    <div className="flex flex-col md:flex-row md:mr-5">
                        <a href="#" className="block py-0 pb-3 md:py-4 px-5 md:border-b-4 border-transparent duration-300 hover:border-blue-500 hover:text-blue-500">Home</a>
                        <a href="#" className="block py-0 pb-3 md:py-4 px-5 md:border-b-4 border-transparent duration-300 hover:border-blue-500 hover:text-blue-500">Project</a>
                        <a href="#" className="block py-0 pb-3 md:py-4 px-5 md:border-b-4 border-transparent duration-300 hover:border-blue-500 hover:text-blue-500">Achievement</a>
                        <a href="#" className="block py-0 pb-3 md:py-4 px-5 md:border-b-4 border-transparent duration-300 hover:border-blue-500 hover:text-blue-500">Contact</a>
                    </div>
                    <div className="flex md:flex-row justify-center">
                        <div className="block py-0 pb-3 lg:py-4 px-2 duration-300 text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndexNavbar;