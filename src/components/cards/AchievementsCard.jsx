import React from "react";

const AchievementsCard = (props) => {
    return (
        <div className={props.className}>

            <div className="items-center justify-between w-full mx-auto rounded-xl pb-3">
                <div className="mb-4 w-80 mx-auto shadow-md hover:shadow-xl rounded-xl transform duration-300 hover:scale-105">
                    <img
                        src={props.img}
                        className="rounded-xl w-full h-full"
                        align="center"
                    />
                </div>

                <div className="text-center">
                    <div>
                        <h5 className="text-md font-semibold dark:text-gray-300">{props.name}</h5>
                    </div>
                </div>
            </div>

        </div>
    )
}

AchievementsCard.defaultProps = {
    img: "https://mdbootstrap.com/img/new/standard/city/031.jpg",
}

export default AchievementsCard;