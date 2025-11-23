import React from "react";
import { Outlet } from "react-router";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <div className="max-w-screen-2xl mx-auto w-full flex-1">

      <Outlet></Outlet>
      </div>
      <Footer/>
    </div>
  );
};

export default Root;
