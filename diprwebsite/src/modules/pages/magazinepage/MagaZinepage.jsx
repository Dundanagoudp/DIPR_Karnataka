import React from "react";
import MagazineDownloadPdf from "../../components/Magazinepagecom/Downloadpdf/DownloadPdf";
import MagaZineRecommend from "../../components/Magazinepagecom/RecommendNews/RecommendNews";
import MagzineData from "../../components/Magazinepagecom/magzinedata/MagzineData";

const MagaZinepages = () => {
      return (
            <div>
         <MagazineDownloadPdf/>
         <div style={{display:"flex" ,marginLeft:"100px",marginRight:"20px"} }>
            <div >
            <MagaZineRecommend/>
            </div>
            <div>
            <MagzineData/>
            </div>
         </div>
         </div>
        
      );
};

export default MagaZinepages;