import React from "react";
import IndexHeader from "../components/headers/IndexHeader";
import IndexNavbar from "../components/navbars/IndexNavbar";
import Achievements from "../layouts/Achievements";
import Footer from "../layouts/Footer";
import Members from "../layouts/Members";
import Projects from "../layouts/Projects";
import Structures from "../layouts/Structures";
import Teams from "../layouts/Teams";
import Contact from "../layouts/Contact";

function Index() {
  return (
    <div>
        <div className="dark:bg-gray-800 duration-500">
            <IndexNavbar />
            <div>
              <IndexHeader />
            </div>
            <div>
              <Teams />
            </div>
            <div>
              <Structures />
            </div>
            <div>
              <Members />
            </div>
            <div>
              <Projects />
            </div>
            <div>
              <Achievements />
            </div>
            <div>
              <Contact />
            </div>
            <div>
              <Footer />
            </div>
        </div>
    </div>
  );
}

export default Index;
