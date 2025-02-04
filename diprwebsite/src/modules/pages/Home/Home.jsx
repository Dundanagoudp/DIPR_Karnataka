import React from "react";
import Trending from "../../components/Trending/Trending";
import AllNews from "../../components/allnews/AllNews";
import MagaZines from "../../components/magazine/MagaZine";

const Home = () => {
      return (
        <div>
          <Trending/>
          <div style={{ display: "flex" }}>
            <AllNews/>
            {/* <MagaZines /> */}
          </div>
        </div>
      );
};    

export default Home;