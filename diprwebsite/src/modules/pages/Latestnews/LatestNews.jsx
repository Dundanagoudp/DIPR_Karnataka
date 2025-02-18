import React, { useState, useEffect } from "react";
import LatestCat from "../../components/Latestcat/LatestCat";
import RecomMended from "../../components/Recommended/RecomMended";
import LatestTab from "../../components/Latesttab/LatestTab";
import Loader from "../../../components/loder/Loder"; 

const LatestNews = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading process
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader /> 
      ) : (
        <>
          <LatestCat />
          <RecomMended />
          <LatestTab />
        </>
      )}
    </div>
  );
};

export default LatestNews;