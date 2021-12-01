import React from "react";

const StructuresCard = (props) => {
    return (
        <div className={props.className}>

            <div className="items-center justify-center w-64 lg:w-80 pb-3 mb-5 lg:mb-0">
                <div className="bg-white dark:bg-gray-800 w-52 h-52 rounded-full mx-auto pt-0.5 hover:scale-105 transform duration-300">
                    <div className="w-52 h-52 bg-gradient-to-b from-blue-400 dark:from-blue-500 to-blue-200 dark:to-blue-300 shadow-xl rounded-full">
                        <img
                            src={props.src}
                            className="rounded-full h-full w-full"
                            align="center"
                        />
                    </div>
                </div>

                <div className="text-center">
                    <h5 className="text-2xl font-semibold mt-10 mb-5">{props.jabatan}</h5>
                    <p className="mx-3 text-lg font-bold">
                    {props.nama}
                    </p>
                    <p className="mx-3 text-md text-gray-700">
                    {props.jurusan}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default StructuresCard;