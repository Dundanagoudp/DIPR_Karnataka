import React, { useEffect, useState } from "react";
import MagaZineRecommend from "../../components/Magazinepagecom/RecommendNews/RecommendNews";
import MagzineData from "../../components/Magazinepagecom/magzinedata/MagzineData";
import MagazineDownloadPdf from "../../components/Magazinepagecom/downloadpdf/DownloadPdfs";
import { FlexContainer, MagzineDataContainer } from "../magazinepage/MagaZinepage.styles";
import MagazinePdf from "../../components/Magazinepagecom/magazinepdf/MagazinePdf";
import Loader from "../../../components/loder/Loder";

const MagaZinepages = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <MagazineDownloadPdf />
      <MagazinePdf />
      {/* <FlexContainer>
        <div>
          <MagaZineRecommend />
        </div>
        <MagzineDataContainer>
          <MagzineData />
        </MagzineDataContainer>
      </FlexContainer> */}
    </div>
  );
};

export default MagaZinepages;