import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <div className=" bg-[#B80000]">
        {/* <Navbar></Navbar> */}
      </div>
      <Outlet></Outlet>
      <div>
       
      </div>
    </div>
  );
};

export default Main;