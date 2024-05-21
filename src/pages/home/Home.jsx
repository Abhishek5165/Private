import React from "react";

import "./style.scss";
import Hero from "./heroSection/HeroSection";
import Trending from "./trending/Trending";
import Popular from "../popular/Popular";
import TopRated from "./topRated/TopRated";
import Upcoming from "./Upcoming/Upcoming";

const Home = () => {
  return (
    <div className="homePage">
    
        <Hero/>
        <Trending/>
        <Popular/>
        <TopRated/>
        <Upcoming/>
        
    </div>
  );
};

export default Home;
