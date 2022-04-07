import React from "react";
import { SmartAngklung, SmartCard, SpiderBot } from "../../assets";
import { SectionTitle } from "../molecules";
import CardProject from "../molecules/CardProject";

const Projects = () => {
  return (
    <section
      id="project"
      className="py-20 overflow-hidden bg-white dark:bg-slate-900 transition-500"
    >
      <div className="container transition-500">
        <SectionTitle titleLeft="Our" titleRight="Projects" />
      </div>
      <div className="flex flex-wrap justify-center px-5 pt-5 md:gap-12 transition-500">
        <CardProject title="Smart Card" src={SmartCard} />
        <CardProject title="Smart Angklung" src={SmartAngklung} />
        <CardProject title="Smart Card" src={SpiderBot} />
      </div>
    </section>
  );
};

export default Projects;
