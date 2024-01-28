import React from "react";

import "./style.scss";
import Hero from "./heroSection/hero";
import Trending from "./trending/Trending";
import Popular from "../popular/Popular";
import TopRated from "./topRated/TopRated";
import Upcoming from "./Upcoming/Upcoming";

const Home = () => {
  return (
    <div className="homePage">
      <React.StrictMode>
        <Hero/>
        <Trending/>
        <Popular/>
        <TopRated/>
        <Upcoming/>

      </React.StrictMode>
    </div>
  );
};

export default Home;
