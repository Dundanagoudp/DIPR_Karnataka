import { Outlet } from "react-router-dom";
// // import NavBar from "../components/navbar/NavBar";
// // import CategoryTab from "../components/categorytab/CategoryTab";
import Footer from "../components/Footer/Footer";
// // import ToolBar from "../components/ToolBar/ToolBar";
// import LoadingProgressBar from "../components/Progressloader/ProgressLoading";
import Header from "../components-newdesigns/layout/Header/Header";
import HeaderTab from "../components-newdesigns/layout/headertabs/HeaderTab";
import LanguageNavbar from "../components-newdesigns/layout/languagetranslation/LanguageNavbar";
import SiteFooter from "../components-newdesigns/layout/new-sitefooter/site-footer";
import TrendingBar from "../components-newdesigns/layout/trendingbar/TrendingBar";


const Applayout = () => {
  return (
    // <LoadingProgressBar> 
      <div role="application" aria-label="DIPR Website">
        <Header />
        <LanguageNavbar />
        <HeaderTab />
        <TrendingBar />
        {/* <CategoryTab /> */}
        {/* <NavBar /> */}
        {/* <ToolBar /> */}
        <main role="main" aria-label="Main content">
        <Outlet />
        </main>
        {/* <Footer/> */}
        <SiteFooter />
      </div>
    // </LoadingProgressBar>
  );
};

export default Applayout;