import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import CategoryTab from "../components/categorytab/CategoryTab";
import Footer from "../components/Footer/Footer";
import ToolBar from "../components/ToolBar/ToolBar";
import LoadingProgressBar from "../components/Progressloader/ProgressLoading";

const Applayout = () => {
  return (
    <LoadingProgressBar> {/* Wrap entire layout with Loading */}
      <div style={{ paddingBottom: '30px' }}>
        <Header />
        <CategoryTab />
        <ToolBar />
        <Outlet />
        <Footer />
        <NavBar />
      </div>
    </LoadingProgressBar>
  );
};

export default Applayout;