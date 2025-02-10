import React from "react";
import MagaZineRecommend from "../../components/Magazinepagecom/RecommendNews/RecommendNews";
import MagzineData from "../../components/Magazinepagecom/magzinedata/MagzineData";
import MagazineDownloadPdf from "../../components/Magazinepagecom/downloadpdf/DownloadPdfs";
import { FlexContainer } from "../magazinepage/MagaZinepage.styles";
const MagaZinepages = () => {
  return (
    <div>
      <MagazineDownloadPdf />
      <FlexContainer>
        <div>
          <MagaZineRecommend />
        </div>
        <div style={{ width: "70%" }}>
          <MagzineData  />
        </div>
      </FlexContainer>
    </div>
  );
};

export default MagaZinepages;