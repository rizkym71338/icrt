import React from "react";

const AchievementsCard = (props) => {
    return (
        <div className={props.className}>

            <div className="items-center justify-between w-full mx-auto rounded-xl pb-3">
                <div className="mb-4 h-48 sm:w-96 mx-auto">
                    <img
                        src="https://mdbootstrap.com/img/new/standard/city/031.jpg"
                        className="rounded-xl block w-full h-full hover:scale-110 transform duration-300"
                        align="center"
                    />
                </div>

                <div className="text-center">
                    <h5 className="text-md font-semibold dark:text-white">{props.name}</h5>
                </div>
            </div>

        </div>
    )
}

export default AchievementsCard;