import React from "react";
import AboutUsText from "../../components/aboutuscom/aboutustexts/AboutUsTextpage";
import AboutUsRecommendeds from "../../components/aboutuscom/aboutRecommended/RecommendedNews";
import AboutusAllnews from "../../components/aboutuscom/aboutusnews/AboutAllNews";

const AboutUspage = () => (
      <div style={{width:"100%"}}>
            <AboutUsText />
            <div style={{display:"flex" ,marginLeft:"60px",marginRight:"40px" ,padding:"20px",gap:"30px",} }>
            <div style={{width:"30%",}}>
             <AboutUsRecommendeds />
            </div>
             <div style={{width:"70%"}}>
             <AboutusAllnews/>
             </div>
            </div>
      </div>

);    

export default AboutUspage;