import React from "react";
import { SectionTitle } from "../molecules";

const Projects = () => {
  return (
    <section
      id="project"
      className="py-20 overflow-hidden bg-white dark:bg-slate-900 transition-500"
    >
      <div className="container transition-500">
        <SectionTitle titleLeft="Our" titleRight="Projects" />
      </div>
    </section>
  );
};

export default Projects;
