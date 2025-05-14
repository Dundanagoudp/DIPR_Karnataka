import React, { useEffect, useState } from "react";
import ExclusiveVideos from "../../components/exclusivecom/exclusivevideos/ExclusiveVideos";
// import ExclusivePosts from "../../components/exclusivecom/exclusivepost/ExclusivePosts";
// import RelatedPosts from "../../components/exclusivecom/relatedposts/RelatedPosts";
// import ExclusiveNews from "../../components/exclusivecom/exclusiveRecommended/ExclusiveNews";
// import ExclusiveAllNews from "../../components/exclusivecom/exclusiveallnews/ExclusiveAllNews";
import {
  FlexContainer,
  RelatedPostsContainer,
  SecondFlexContainer,
} from "../exclusivepage/Exclusive.styles";
import Exclusiveshorts from "../../components/exclusivecom/exclusiveshorts/Exclusiveshorts";
import Loader from "../../../components/loder/Loder"; 

const Exclusive = () => {
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    // Simulate a 3-second loading time
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 3 seconds
    }, 3000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  // Display the Loader while isLoading is true
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
      {/* Uncomment these sections if you want to include them */}
      {/* <RelatedPostsContainer>
        <RelatedPosts />
      </RelatedPostsContainer> */}
      {/* <SecondFlexContainer> */}
        {/* <div>
          <ExclusiveNews />
        </div> */}
        {/* <div>
          <ExclusiveAllNews />
        </div> */}
      {/* </SecondFlexContainer> */}
    </div>
  );
};

export default Exclusive;