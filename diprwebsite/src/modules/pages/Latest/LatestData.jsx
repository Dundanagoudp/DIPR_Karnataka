import React from "react";
import LatestNewsRecommended from "../../components/Latestnews/allrecommended/LatestRecommended";
import NewsRecommended from "../../components/Latestnews/newsrecommended/NewsRecommended";

export const LatestData = () => {
      return (
            <div style={{ display: "flex" }}>
                  <div>
                  <LatestNewsRecommended/>
                  </div>
                  <div>
                  <NewsRecommended/>
                  </div>
            </div>
      )
}

export default LatestData;