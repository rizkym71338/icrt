import React from "react";

const ProjectsButton = (props) => {
    return (
        <div>
            <button className="bg-blue-500 dark:bg-blue-600 text-white dark:text-gray-800 font-bold lg:text-base text-sm lg:px-8 px-6 py-3 rounded-full shadow-lg hover:shadow-xl outline-none focus:outline-none transition-all transform hover:scale-105 duration-300" type="button">
                {props.name}
            </button>
        </div>
    )
}

export default ProjectsButton;