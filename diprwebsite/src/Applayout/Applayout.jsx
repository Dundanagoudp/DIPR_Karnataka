import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";

const Applayout = () => {

  return (
    <div>
      <Header  /> 
      <NavBar/> 
        <Outlet />  
      {/* <Footer /> */}
      </div>
  );
};

export default Applayout;
