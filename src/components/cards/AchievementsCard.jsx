import React from "react";

const AchievementsCard = (props) => {
    return (
        <div className={props.className}>

            <div className="items-center justify-between md:w-96 mx-5 rounded-xl pb-3" width="350px">
                <img
                    src="https://mdbootstrap.com/img/new/standard/city/031.jpg"
                    className="rounded-xl mb-4 h-48 w-96 hover:scale-110 transform duration-300"
                    alt=""
                    align="center"
                />

                <div className="text-center">
                    <h5 className="text-md font-semibold dark:text-white">{props.name}</h5>
                </div>
            </div>

        </div>
    )
}

export default AchievementsCard;