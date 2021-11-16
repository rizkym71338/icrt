import React from "react";

const ProjectsCard = (props) => {
    return (
        <div className={props.className}>

            <div className="items-center justify-between w-64 md:w-80 mx-5 rounded-xl pb-3">
                <img
                    src="https://mdbootstrap.com/img/new/standard/city/031.jpg"
                    className="rounded-xl mb-4 hover:scale-110 transform duration-300"
                    alt=""
                    align="center"
                />

                {/* <div className="text-center">
                    <h5 className="text-xl font-semibold my-10 dark:text-white">{props.name}</h5>

                    <p className="my-4 mx-3 text text-gray-700 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi
                    tenetur, voluptatibus harum consequuntur alias quaerat excepturi
                    temporibus nisi commodi, ex, ratione quae soluta! Saepe alias dolores
                    dolorem assumenda totam?
                    </p>
                </div> */}
            </div>

        </div>
    )
}

export default ProjectsCard;