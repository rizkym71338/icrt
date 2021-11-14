import React from "react";

const HeaderButton = (props) => {
    return (
        <div>
            <a href={props.href} className="bg-blue-500 dark:bg-blue-500 text-white dark:text-gray-800 font-bold md:text-base text-xs md:px-8 px-5 md:py-3 py-2 rounded-full shadow-md hover:shadow-xl outline-none focus:outline-none transition-all transform hover:scale-125 duration-300" type="button">
                {props.name}
            </a>
        </div>
    )
}

export default HeaderButton;