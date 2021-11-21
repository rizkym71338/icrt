import React from "react";

const TeamsCard = (props) => {
    return (
        <div className={props.className}>

            <div className="items-center block text-center justify-center md:px-0 px-10 mx-auto rounded-xl pb-3">
                <div className="w-60 h-60 bg-white mx-auto rounded-full flex justify-center items-center text-center dark:shadow-xl">
                    <div className="items-center justify-center mx-auto text-center h-52">
                        <img
                            src={props.img}
                            className="rounded-full mb-4 hover:scale-110 mx-auto h-full transform duration-300"
                        />
                    </div>
                </div>

                <div className="text-center block mx-auto justify-center align-middle items-center">
                    <p className="my-4 mx-3 block md:text-sm text-gray-700 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi
                    tenetur, voluptatibus harum consequuntur alias quaerat excepturi
                    temporibus nisi commodi, ex, ratione quae soluta! Saepe alias dolores
                    dolorem assumenda totam?
                    </p>
                </div>
            </div>

        </div>
    )
}

export default TeamsCard;