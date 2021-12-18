import React from "react";

const HeaderButton = (props) => {
    return (
        <div className="bg-blue-500 dark:bg-blue-600 text-white dark:text-gray-800 font-bold lg:text-base text-xs lg:px-8 lg:py-3 px-5 py-2 rounded-full shadow-lg hover:shadow-xl outline-none focus:outline-none transform hover:scale-105 duration-300">
            <a href={props.href} type="button">
                {props.name}
            </a>
        </div>
    )
}

export default HeaderButton;