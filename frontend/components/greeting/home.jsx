import React, {useEffect, useState} from "react";
import NavBarContainer from "../NavBar/navbar_container";
import SearchBarContainer from "../searchbar/search_bar_container";
import MoreCities from "./more_cities"
import Logo from "./logo"
import { Link } from "react-router-dom";

const Home = props => {
  const fetchBusinesses = props.fetchBusinesses
  
  useEffect(() => {
    console.log("it works")
    fetchBusinesses();
  }, [])

if (!props.businesses.length) {
  return null;
}

const content =  ( 
    <div>
      <header className="header-all-container">
        <div className="header-all">
          <NavBarContainer />
       
            <Logo />
      
          <SearchBarContainer />
        </div>
      </header>
      <div className="home-body">
        <MoreCities />
        <div/>
        <div className="top-restaurants-in-sf">
          <div className="top-spots">Top Spots</div>
        </div>
        <div className="home-restaurant-container">
          <div className="home-restaurants">
            <div className="home-restaurant">
              <div className="home-restaurant-photo">
                <img src={props.businesses[0].photos} alt="" />
              </div>
              <div className="home-business-description">
                <Link
                  className="title-business-description"
                  to="/businesses/1"
                >
                  {props.businesses[0].businessName}
                </Link>
                <div className="category-business-description">Japanese</div>
                <div className="category-business-description">
                  Embarcadero
                </div>
              </div>
            </div>
            <div className="home-restaurant">
              <div className="home-restaurant-photo">
                <img src={`${props.businesses[3].photos}`} alt="" />
              </div>
              <div className="home-business-description">
                <Link
                  to="/businesses/4"
                  className="title-business-description"
                >
                  {props.businesses[3].businessName}
                </Link>
                <div className="category-business-description">Boba</div>
                <div className="category-business-description">Chinatown</div>
              </div>
            </div>
            <div className="home-restaurant">
              <div className="title-home" />
              <div className="home-restaurant-photo">
                <img src={`${props.businesses[6].photos}`} alt="" />
              </div>
              <div className="home-business-description">
                <Link
                  to="/businesses/7"
                  className="title-business-description"
                >
                  {props.businesses[6].businessName}
                </Link>
                <div className="category-business-description">Cafe</div>
                <div className="category-business-description">
                  North Beach
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return content  
}


export default Home;
