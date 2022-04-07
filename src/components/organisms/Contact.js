import React, { useState } from "react";
import EmailJs from "emailjs-com";
import { Blob, LogoIcon } from "../../assets";
import { SectionTitle } from "../molecules";

const Contact = () => {
  const [alertOk, setAlertOk] = useState(false);
  const [alert, setAlert] = useState(false);

  const handlerSendEmail = (e) => {
    e.preventDefault();

    EmailJs.sendForm(
      "service_ggeam1w",
      "template_x9u26tf",
      e.target,
      "user_sPPn6ILTYp9FnKygXDc5J"
    ).then(
      (res) => {
        console.log(res);
        setAlertOk(true);
      },
      (error) => {
        console.log(error);
        setAlert(true);
      }
    );
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="py-20 overflow-hidden bg-white dark:bg-slate-900 transition-500"
    >
      <div className="container transition-500">
        <SectionTitle titleLeft="Contact" titleRight="Us" />
        <div className="flex flex-col space-y-6 lg:flex-row md:p-5 lg:space-y-0 transition-500">
          {/* LEFT */}
          <div className="flex items-center justify-center w-full transition-500 lg:w-1/2">
            <div className="relative flex items-center justify-center h-[360px]">
              <img
                src={LogoIcon}
                className="z-10 -scale-x-100 md:h-full h-4/5 transition-500"
              />
              <Blob className="absolute bottom-0 right-0 md:scale-75 md:-scale-x-75 scale-[45%] -scale-x-[45%] text-primary-100 dark:text-primary-300 transition-500" />
              <Blob className="absolute top-10 -left-12 rotate-180 md:scale-50 md:-scale-x-50 scale-[35%] -scale-x-[35%] text-slate-100 dark:text-slate-300 transition-500" />
            </div>
          </div>
          {/* RIGHT */}
          <div className="flex flex-col items-center justify-between pt-10 lg:w-1/2 lg:mx-auto lg:pt-20">
            {alertOk && (
              <div className="w-full px-6 md:px-12">
                <div
                  className="w-full p-4 mb-4 text-sm text-center text-primary-700 bg-slate-100 rounded-3xl dark:bg-slate-400 dark:text-primary-800"
                  role="alert"
                >
                  <span className="font-medium">Succes!</span> To Send Messages
                </div>
              </div>
            )}
            {alert && (
              <div className="w-full px-6 md:px-12">
                <div
                  className="w-full p-4 mb-4 text-sm text-center text-red-700 bg-red-100 rounded-3xl dark:bg-red-400 dark:text-red-800"
                  role="alert"
                >
                  <span className="font-medium">Failed!</span> To Send Messages
                </div>
              </div>
            )}
            <form
              className="flex flex-col w-full px-6 space-y-5 md:px-12"
              onSubmit={handlerSendEmail}
            >
              <input
                type="text"
                name="nama"
                className="block w-full p-6 text-sm bg-white border drop-shadow-lg border-slate-300 text-slate-900 rounded-3xl focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-900 dark:border-slate-700 dark:placeholder-slate-100 dark:text-slate-100 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Nama Anda"
                required
              />
              <input
                type="email"
                name="email"
                className="block w-full p-6 text-sm bg-white border drop-shadow-lg border-slate-300 text-slate-900 rounded-3xl focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-900 dark:border-slate-700 dark:placeholder-slate-100 dark:text-slate-100 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Email Anda"
                required
              />
              <textarea
                type="text"
                rows="5"
                className="block w-full p-6 text-sm bg-white border drop-shadow-lg border-slate-300 text-slate-900 rounded-3xl focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-900 dark:border-slate-700 dark:placeholder-slate-100 dark:text-slate-100 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Pesan"
                name="pesan"
                required
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="justify-end px-10 py-3 my-5 font-bold text-white shadow-xl transition-300 bg-primary-500 dark:bg-primary-600 rounded-3xl dark:text-slate-100 hover:bg-primary-700"
                >
                  Kirim
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
