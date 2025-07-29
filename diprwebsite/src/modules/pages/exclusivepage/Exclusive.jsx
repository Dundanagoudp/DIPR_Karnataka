import React, { useEffect, useState } from "react";
import {
  FlexContainer,
} from "../exclusivepage/Exclusive.styles";
import ExclusiveVideos from "../../components/exclusivecom/exclusivevideos/ExclusiveVideos";
import Exclusiveshorts from "../../components/exclusivecom/exclusiveshorts/Exclusiveshorts";
import Gallery from "../dynamicGallery/Gallery";

const Exclusive = () => {

  return (
    <div role="main" aria-label="Exclusive content page">
      {/* <FlexContainer>
        <div role="region" aria-label="Exclusive videos section">
          <ExclusiveVideos />
        </div>
        <div role="region" aria-label="Exclusive shorts section">
          <Exclusiveshorts />
        </div>
      </FlexContainer> */}
      <Gallery/>
    </div>
  );
};

export default Exclusive;
