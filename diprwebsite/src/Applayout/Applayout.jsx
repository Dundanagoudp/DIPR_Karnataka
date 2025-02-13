import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import CategoryTab from "../components/categorytab/CategoryTab";
import Footer from "../components/Footer/Footer";


const Applayout = () => {

  return (
    <div>
      <Header  /> 
      <NavBar/> 
      <CategoryTab/>
      <Outlet />  
      <Footer />
      </div>
  );
};

export default Applayout;
