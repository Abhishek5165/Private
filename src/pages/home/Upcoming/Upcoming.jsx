import React, { useState } from "react";
import ContentWrapper from "../../../components/Content_Wrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Upcoming = () => {
  const [endpoint] = useState("movie");

  const { data, loading } = useFetch(`/${endpoint}/now_playing`);


  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Now Playing</span>
        <SwitchTabs data={["Movies"]}/>
      </ContentWrapper>
      <Carousel data={data?.results} 
      loading={loading} 
      endpoint={endpoint}/>
    </div>
  );
};

export default Upcoming;
