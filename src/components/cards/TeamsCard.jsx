import React from "react";

const TeamsCard = (props) => {
    return (
        <div className={props.className}>

            <div className="items-center block text-center justify-center md:px-0 px-10 mx-auto rounded-xl pb-3">
                <div className="w-60 h-60 mx-auto rounded-full flex justify-center items-center text-center dark:shadow-xl transform duration-300 hover:scale-105">
                    <div className="items-center justify-center mx-auto text-center h-52 w-52">
                        {props.logo}
                    </div>
                </div>

                <div className="text-center block mx-auto justify-center align-middle items-center">
                    <p className="my-4 mx-3 block md:text-sm text-gray-700 dark:text-gray-300">
                        {props.deskripsi}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default TeamsCard;