import React from "react";

const StructuresCard = (props) => {
    return (
        <div className={props.className}>

            <div className="items-center w-64 lg:w-80 pb-3 mb-5 lg:mb-0">
                <div className="w-52 h-52 mx-auto">
                    <img
                        src="https://mdbootstrap.com/img/new/standard/city/031.jpg"
                        className="rounded-full h-full w-full hover:scale-110 transform duration-300"
                        align="center"
                    />
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