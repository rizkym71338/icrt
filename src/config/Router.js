import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "../layouts";
import { Home } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={"Not Found"} />
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Router;
