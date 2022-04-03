import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="py-20">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
