import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/lazyLoading/Image";
import ContentWrapper from "../../../components/Content_Wrapper/ContentWrapper";

import "./style.scss";

const Hero = () => {
  const [background, setBackGround] = useState("");
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackGround(bg);
  }, [data]);

  const searchInputHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="back-drop">
          <Img src={background} />
        </div>
      )}

      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="heroContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of Movies, TV Shows & people to discover.
            <br />Explore Now.
          </span>

          <div className="searchInput">
            <input
              type="text"
              placeholder="Search Movies and TV Shows...."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchInputHandler}
            />

            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Hero;
