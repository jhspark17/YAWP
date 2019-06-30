import React from 'react';


const MoreCities = props => {
  const cities = (
    <div>
      <div>
        <div className="san-francisco">Yawp San Francisco</div>
      </div>
      <div className="city-names-container">
        <div>New York</div>
        <div>San Jose</div>
        <div>Los Angeles</div>
        <div>Chicago</div>
        <div>Palo Alto</div>
        <div>Oakland</div>
        <div>More Cities</div>
      </div>
    </div>
  );
  return cities;
}

export default MoreCities;