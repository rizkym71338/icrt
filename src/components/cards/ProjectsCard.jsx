import React from "react";

const ProjectsCard = (props) => {
    return (
        <div className={props.className}>
            <div className="items-center justify-center mx-5 rounded-xl pb-5">
                <div className="w-72 mb-4 shadow-md rounded-xl hover:shadow-xl hover:scale-105 transform duration-300">
                    <img
                        src={props.img}
                        className="w-full h-full rounded-xl"
                        align="center"
                    />
                </div>
                <div className="text-center dark:text-gray-700">
                    <h5 className="text-md font-semibold">{props.name}</h5>
                </div>
            </div>
        </div>
    )
}

ProjectsCard.defaultProps = {
    img: "https://mdbootstrap.com/img/new/standard/city/031.jpg",
}

export default ProjectsCard;