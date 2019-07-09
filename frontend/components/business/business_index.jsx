import React, {useEffect, useState} from 'react'
import BusinessIndexItem from "./business_index_item";
import BusinessMap from "./business_map"
import NavBarShowContainer from '../NavBar/navbar_show_container';

const BusinessIndex = props => {
  const fetchBusinesses = props.fetchBusinesses
  
  useEffect(() => {
    fetchBusinesses()
  }, [])

 if (!props.businesses[0]) {
    return null;
  }
  debugger
 const content = (
    <div>
      <NavBarShowContainer type="non-home" />
      <div className="filter-container">
        <div className="filter">
          <div className="filter-right">Best Places in San Francisco</div>
          <span></span>
          <div className="filter-left">Showing 1-9 of 9</div>
        </div>
      </div>
      <div className="index-main">
        <div>
          <ul>
            {props.businesses.map(business => (
              <BusinessIndexItem business={business} key={business.id} />
            ))}
          </ul>
        </div>
        <div className="map-container">
            <BusinessMap businesses={props.businesses} />
        </div>
      </div>
    </div>
  );

  return content;
}

export default BusinessIndex;