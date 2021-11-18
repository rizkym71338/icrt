import React from "react";

const StructuresCard = (props) => {
    return (
        <div className={props.className}>

            <div className="items-center w-64 md:w-80 mx-12 pb-3 mb-5 md:mb-0">
                <img
                    src="https://mdbootstrap.com/img/new/standard/city/031.jpg"
                    className="rounded-full md:w-80 md:h-80 w-64 h-64 mb-4 hover:scale-110 transform duration-300"
                    align="center"
                />

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