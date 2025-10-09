import Header from "../components/Header/Header";
import HeaderTab from "../components/headertabs/HeaderTab";
import { Outlet } from "react-router-dom";
// // import NavBar from "../components/navbar/NavBar";
// // import CategoryTab from "../components/categorytab/CategoryTab";
import Footer from "../components/Footer/Footer";
// // import ToolBar from "../components/ToolBar/ToolBar";
import LoadingProgressBar from "../components/Progressloader/ProgressLoading";
import LanguageNavbar from "../components/languagetranslation/LanguageNavbar";
import TrendingBar from "../components/trendingbar/TrendingBar";
import SiteFooter from "../components/new-sitefooter/site-footer";

const Applayout = () => {
  return (
    <LoadingProgressBar> 
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
        <Footer/>
        {/* <SiteFooter /> */}
      </div>
    </LoadingProgressBar>
  );
};

export default Applayout;