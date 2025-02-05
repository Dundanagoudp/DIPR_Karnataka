import React from "react";
import LatestCat from "../../components/Latestcat/LatestCat";
import RecomMended from "../../components/Recommended/RecomMended";
import LatestTab from "../../components/Latesttab/LatestTab";

const LatestNews = () => {
      return (
            <div>
                  <LatestCat/>
                  <RecomMended/>
                  <LatestTab/>
            </div>
      )
};    

export default LatestNews