import React, { useEffect, useState } from "react";
import {
  FlexContainer,
} from "../exclusivepage/Exclusive.styles";
import Loader from "../../../components/apiloders/ApiLoders"; 
import ExclusiveVideos from "../../components/exclusivecom/exclusivevideos/ExclusiveVideos";
import Exclusiveshorts from "../../components/exclusivecom/exclusiveshorts/Exclusiveshorts";

const Exclusive = () => {
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
      <FlexContainer>
        <div>
          <ExclusiveVideos />
        </div>
        <div>
          <Exclusiveshorts />
        </div>
      </FlexContainer>
    </div>
  );
};

export default Exclusive;
