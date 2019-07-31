import React, { useEffect, useState } from "react";
import NavBarContainer from "../NavBar/navbar_container";
import SearchBarContainer from "../searchbar/search_bar_container";
import MoreCities from "./more_cities";
import Logo from "./logo";
import TopSpots from "./top_spots"
import { Link } from "react-router-dom";

const Home = props => {
  const {fetchBusinesses, businesses} = props
  
  useEffect(() => {
    console.log("it works");
    fetchBusinesses();
  }, []);

  if (props.businesses.length < 8) {
    return null;
  }

  const content = (
    <div>
      <header className="header-all-container">
        <div className="header-all">
          <NavBarContainer />
          <Logo />
          <SearchBarContainer businesses={businesses}/>
        </div>
      </header>
      <div className="home-body">
        <MoreCities />
        <TopSpots businesses={props.businesses}/>
      </div>
    </div>
  );

  return content;
};

export default Home;
