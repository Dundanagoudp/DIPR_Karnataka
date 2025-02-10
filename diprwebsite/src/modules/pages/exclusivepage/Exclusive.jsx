import React from "react";
import ExclusiveVideos from "../../components/exclusivecom/exclusivevideos/ExclusiveVideos";
import ExclusivePosts from "../../components/exclusivecom/exclusivepost/ExclusivePosts";
import RelatedPosts from "../../components/exclusivecom/relatedposts/RelatedPosts";
import ExclusiveNews from "../../components/exclusivecom/exclusiveRecommended/ExclusiveNews";
import ExclusiveAllNews from "../../components/exclusivecom/exclusiveallnews/ExclusiveAllNews";
import {
  FlexContainer,
  RelatedPostsContainer,
  SecondFlexContainer,
} from "../exclusivepage/Exclusive.styles"; 

const Exclusive = () => {
  return (
    <div>
      <FlexContainer>
        <div>
          <ExclusiveVideos />
        </div>
        <div>
          <ExclusivePosts />
        </div>
      </FlexContainer>
      <RelatedPostsContainer>
        <RelatedPosts />
      </RelatedPostsContainer>
      <SecondFlexContainer>
        <div>
          <ExclusiveNews />
        </div>
        <div>
          <ExclusiveAllNews />
        </div>
      </SecondFlexContainer>
    </div>
  );
};

export default Exclusive;