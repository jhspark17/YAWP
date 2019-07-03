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
              <div className="category-business-description">Japanese</div>
              <div className="category-business-description">Embarcadero</div>
            </div>
          </div>
          <div className="home-restaurant">
            <div className="home-restaurant-photo">
              <img src={`${props.businesses[3].photos}`} alt="" />
            </div>
            <div className="home-business-description">
              <Link to="/businesses/4" className="title-business-description">
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
              <Link to="/businesses/7" className="title-business-description">
                {props.businesses[6].businessName}
              </Link>
              <div className="category-business-description">Cafe</div>
              <div className="category-business-description">North Beach</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return content;
}

export default TopSpots