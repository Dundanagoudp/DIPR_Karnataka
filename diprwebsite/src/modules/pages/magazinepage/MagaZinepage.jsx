import React, { useEffect, useState } from "react";
import MagazineDownloadPdf from "../../components/Magazinepagecom/downloadpdf/DownloadPdfs";
// import Loader from "../../../components/loder/Loder";
import MagazinePdf2 from "../../components/Magazinepagecom/magazinemodalpdf/MagzineModalpdf";

const MagaZinepages = () => {
  // const [isLoading, setIsLoading] = useState(true);
  
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <div>
      <MagazineDownloadPdf />
      <MagazinePdf2 />
    </div>
  );
};

export default MagaZinepages;