import React from 'react';
import { Link } from "react-router-dom"

const TopSpots = props => {

  const content = (
    <div>
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
              <Link className="title-business-description" to="/businesses/1">
                {props.businesses[0].businessName}
              </Link>
              <div className="category-business-description">{props.businesses[0].category.name}</div>
            </div>
          </div>
          <div className="home-restaurant">
            <div className="home-restaurant-photo">
              <img src={`${props.businesses[4].photos}`} alt="" />
            </div>
            <div className="home-business-description">
              <Link to="/businesses/5" className="title-business-description">
                {props.businesses[4].businessName}
              </Link>
              <div className="category-business-description">{props.businesses[4].category.name}</div>
            </div>
          </div>
          <div className="home-restaurant">
            <div className="title-home" />
            <div className="home-restaurant-photo">
              <img src={`${props.businesses[7].photos}`} alt="" />
            </div>
            <div className="home-business-description">
              <Link to="/businesses/8" className="title-business-description">
                {props.businesses[7].businessName}
              </Link>
              <div className="category-business-description">{props.businesses[7].category.name}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return content;
}

export default TopSpots