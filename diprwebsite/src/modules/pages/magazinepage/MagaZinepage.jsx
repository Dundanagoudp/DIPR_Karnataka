import React from "react";
import MagaZineRecommend from "../../components/Magazinepagecom/RecommendNews/RecommendNews";
import MagzineData from "../../components/Magazinepagecom/magzinedata/MagzineData";
import MagazineDownloadPdf from "../../components/Magazinepagecom/downloadpdf/DownloadPdfs";
import { FlexContainer ,MagzineDataContainer} from "../magazinepage/MagaZinepage.styles";
const MagaZinepages = () => {
  return (
    <div>
      <MagazineDownloadPdf />
      <FlexContainer>
        <div>
          <MagaZineRecommend />
        </div>
        <MagzineDataContainer >
          <MagzineData />
        </MagzineDataContainer>
      </FlexContainer>
    </div>
  );
};

export default MagaZinepages;