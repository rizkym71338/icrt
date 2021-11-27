import React from "react";

const ProjectsCard = (props) => {
    return (
        <div className={props.className}>

            <div className="items-center justify-center mx-5 rounded-xl pb-5">
                <div className="w-72 mb-4 hover:scale-105 transform duration-300">
                    <img
                        src="https://mdbootstrap.com/img/new/standard/city/031.jpg"
                        className="w-full h-full rounded-xl"
                        align="center"
                    />
                </div>
                <div className="text-center">
                    <h5 className="text-md font-semibold">{props.name}</h5>
                </div>
            </div>

        </div>
    )
}

export default ProjectsCard;