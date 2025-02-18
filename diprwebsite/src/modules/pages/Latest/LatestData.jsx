import React, { useEffect, useState } from "react";
import LatestNewsRecommended from "../../components/Latestnews/allrecommended/LatestRecommended";
import Loader from "../../../components/loder/Loder"; 

export const LatestData = () => {
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
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <LatestNewsRecommended />
      </div>
    </div>
  );
};

export default LatestData;