import React from "react";
import { Hero, Members, Projects, Structures, Teams } from "../components";

const Home = () => {
  return (
    <>
      <Hero />
      <Teams />
      <Structures />
      <Members />
      <Projects />
    </>
  );
};

export default Home;
