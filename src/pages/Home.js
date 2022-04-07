import React from "react";
import {
  Achievements,
  Hero,
  Members,
  Projects,
  Structures,
  Teams,
} from "../components";

const Home = () => {
  return (
    <>
      <Hero />
      <Teams />
      <Structures />
      <Members />
      <Projects />
      <Achievements />
    </>
  );
};

export default Home;
