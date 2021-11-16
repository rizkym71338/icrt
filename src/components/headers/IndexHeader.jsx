import React from "react";
import Img from "../../assets/img/header.png"
import HeaderButton from "../buttons/HeaderButton";

const IndexHeader = () => {
    return (
        <div className='md:bg-gradient-to-l bg-gradient-to-b from-blue-400 md:to-blue-200 to-blue-300 dark:bg-gradient-to-l dark:from-blue-500 dark:to-blue-300  transition-color duration-500'>

            <div className="flex md:flex-row flex-col md:mx-16 mx-5 md:py-20 pt-20 pb-10 items-center transition duration-500">
                <div className="flex flex-col md:w-2/3 w-full">
                    <div className="flex flex-col md:flex-row md:text-5xl text-3xl mb-3 md:text-left md:justify-start justify-center text-center mx-auto md:mx-0">
                        <h1 className="font-bold text-black">Ikmi Cirebon </h1>
                        <h1 className="md:ml-5 text-gray-700">Robotik Team</h1>
                    </div>
                    <div className="my-3 md:w-2/3 w-full">
                        <span className="font-bold text-black text-xl">Visi</span>
                        <p className="md:text-lg text-sm dark:text-gray-700 duration-500">Menjadikan Unit Kegiatan Mahasiswa Robotika Paling Unggul dan Berprestasi di bidang Robotika.</p>
                    </div>
                    <div className="my-3 w-full">
                        <span className="font-bold text-black text-xl">Misi</span>
                        <div className="md:text-lg text-sm dark:text-gray-700 duration-500">
                            <p>&bull; Mengadakan berbagai pelatihan di bidang robotika.</p>
                            <p>&bull; Mengikuti kompetisi kejuaraan robotika se-indonesia dan internasional.</p>
                            <p>&bull; Menyelenggarakan seminar atau workshop robotika.</p>
                        </div>
                    </div>
                    <div className="flex flex-row md:mt-3 my-3 items-center justify-between px-3 md:w-2/3">
                        <HeaderButton name="Team" href="#team" />
                        <HeaderButton name="Structure" href="#structure" />
                        <HeaderButton name="Member" href="#member" />
                    </div>
                </div>
                <div className="flex-col mx-auto mt-5 md:mt-0">
                    <img src={Img} alt="" width="480px" />
                </div>
            </div>

        </div>
    )
}

export default IndexHeader;