import Navbar from "@/HomePage/Navbar/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <div className="bg-gray-800">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <div>
       
      </div>
    </div>
  );
};

export default Main;
