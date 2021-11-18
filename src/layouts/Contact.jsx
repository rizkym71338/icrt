import React from "react";

const Projects = () => {
    return (
        <div id="contact" className="md:bg-gradient-to-l bg-gradient-to-t from-blue-400 md:to-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-300  transition-color duration-500">
            <div className="md:container mx-auto py-24 md:px-10 px-5">
                <div align="center" className="mx-auto text-5xl font-bold items-center justify-between">
                    <h1>Get In Touch</h1>
                </div>
                <div className="md:mx-auto pt-20 flex md:flex-row flex-col items-center justify-between">
                    <div className="items-center text-center justify-center">
                        
                    </div>
                    <div className="md:w-1/2 w-full" align="center">
                        <form action="">
                            <input type="text" className="form-input my-5 duration-300 transition-all ease-in-out w-full rounded-lg shadow-xl outline-none" placeholder="Nama" />
                            <input type="email" className="form-input my-5 duration-300 transition-all ease-in-out w-full rounded-lg shadow-xl outline-none" placeholder="Email" />
                            <textarea type="text" rows="5" className="form-textarea my-5 duration-300 transition-all ease-in-out w-full rounded-lg shadow-xl outline-none" placeholder="Pesan" />
                            <button type="submit" className="bg-blue-500 rounded-xl my-5 text-white px-10 py-3 transition-all transform hover:scale-110 duration-300 shadow-xl font-bold justify-end">Kirim</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects;