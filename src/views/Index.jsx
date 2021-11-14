import React from "react";
import IndexHeader from "../components/headers/IndexHeader";
import IndexNavbar from "../components/navbars/IndexNavbar";

function Index() {
  return (
    <div>
        <div className="dark:bg-gray-800 h-screen transition ease-in-out duration-500">
            <IndexNavbar />
            <div>
              <IndexHeader />
            </div>
        </div>
    </div>
  );
}

export default Index;
