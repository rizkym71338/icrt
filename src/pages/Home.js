import React from "react";
import {
  Achievements,
  Contact,
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
      <Contact />
    </>
  );
};

export default Home;
