import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
