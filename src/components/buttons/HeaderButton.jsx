import React from "react";

const HeaderButton = (props) => {
    return (
        <div>
            <button
                className="
                    bg-blue-500 dark:bg-blue-500
                    text-white dark:text-gray-800
                    font-bold
                    md:text-base text-xs
                    md:px-8 px-5
                    md:py-3 py-2
                    rounded-full
                    shadow-md
                    hover:shadow-lg
                    outline-none
                    focus:outline-none
                    mr-1
                    mb-1
                    ease-out
                    transition
                    duration-300
                    md:mx-3 mx-2
                "
                type="button"
                >
                {props.name}
            </button>
        </div>
    )
}

export default HeaderButton;