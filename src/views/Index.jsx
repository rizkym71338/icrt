import React from "react";
import IndexHeader from "../components/headers/IndexHeader";
import IndexNavbar from "../components/navbars/IndexNavbar";
import Footer from "../layouts/Footer";
import Teams from "../layouts/Teams";

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
            {/* <div>
              <Members />
            </div> */}
            <div>
              <Footer />
            </div>
        </div>
    </div>
  );
}

export default Index;
