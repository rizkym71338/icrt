import React from "react";
import EmailJs from 'emailjs-com';
import { useState } from 'react';

const Contact = () => {

    const ResponsFormSuccess = () => {
        return (
            <div>
                <div
                    class="
                        flex
                        w-full
                        max-w-sm
                        mx-auto
                        overflow-hidden
                        bg-white
                        rounded-lg
                        shadow-md
                        dark:bg-gray-800
                    "
                    >
                    <div class="flex items-center justify-center w-12 bg-blue-500">
                        <svg
                        class="w-6 h-6 text-white fill-current"
                        viewBox="0 0 40 40"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"
                        />
                        </svg>
                    </div>

                    <div class="px-4 py-2 -mx-3">
                        <div class="mx-3">
                        <span class="font-semibold text-blue-500 dark:text-blue-400"
                            >Success</span
                        >
                        <p class="text-sm text-gray-600 dark:text-gray-200">
                            Your Message was Send!
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    const sendEmail = (e) => {
        e.preventDefault();

    EmailJs.sendForm('service_ggeam1w', 'template_x9u26tf', e.target, 'user_sPPn6ILTYp9FnKygXDc5J')
        .then((result) => {
            console.log(result.text);
            return alert("Succes To Send Messages!");
        }, (error) => {
            console.log(error.text);
            return alert("Failed To Send Messages!");
        });
        e.target.reset()
    };

    return (
        <div id="contact" className="lg:bg-gradient-to-l bg-gradient-to-t from-blue-400 lg:to-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-300  transition-color duration-500">
            <div className="xl:container mx-auto lg:py-24 py-20 lg:px-10 px-5">
                <div align="center" className="mx-auto lg:text-5xl text-3xl font-bold items-center justify-between">
                    <h1>Get In Touch</h1>
                </div>
                <div className="lg:mx-auto lg:pt-20 pt-10 flex lg:flex-row flex-col items-center justify-between">
                    <div className="lg:w-3/5 mx-auto w-full" align="center">
                        <form onSubmit={sendEmail}>
                            <input type="text" className="p-3 dark:text-white dark:bg-gray-800 my-5 duration-300 transition-all ease-in-out w-full rounded-lg shadow-xl border-opacity-0 outline-none" placeholder="Nama" name="nama" required/>
                            <input type="email" className="p-3 dark:text-white dark:bg-gray-800 my-5 duration-300 transition-all ease-in-out w-full rounded-lg shadow-xl outline-none" placeholder="Email" name="email" required/>
                            <textarea type="text" rows="5" className="p-3 dark:text-white dark:bg-gray-800 my-5 duration-300 transition-all ease-in-out w-full rounded-lg shadow-xl outline-none" placeholder="Pesan" name="pesan" required/>
                            <button type="submit" className="bg-blue-500 rounded-xl my-5 text-white dark:text-gray-800 px-10 py-3 transition-all transform hover:scale-110 duration-300 shadow-xl font-bold justify-end">Kirim</button>
                        </form>
                    </div>
                </div>
            </div>

            

        </div>
    )
}

export default Contact;