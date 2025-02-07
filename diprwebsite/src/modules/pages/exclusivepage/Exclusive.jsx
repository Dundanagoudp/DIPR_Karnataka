import React from "react";
import ExclusiveVideos from "../../components/exclusivecom/exclusivevideos/ExclusiveVideos";
import ExclusivePosts from "../../components/exclusivecom/exclusivepost/ExclusivePosts";
import RelatedPosts from "../../components/exclusivecom/relatedposts/RelatedPosts";

const Exclusive = () => {
      return (
            <div>
                  <div style={{display:"flex" ,marginLeft:"100px",marginRight:"40px" ,padding:"20px",gap:"60px",}} >
                  <div >
                  <ExclusiveVideos/>
                  </div>
                  <div>
                 <ExclusivePosts/>
                  </div>
                  </div>
                  <div>
                        <RelatedPosts/>
                  </div>
            </div>
      );
};

export default Exclusive;