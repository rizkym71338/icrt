import React from "react";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={"Not Found"} />
      <Route path="/" element={"Main"} />
    </Routes>
  );
};

export default Router;
