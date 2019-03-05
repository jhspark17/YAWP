import React from 'react';
import { Link } from 'react-router-dom';
import NavBarShowContainer from '../NavBar/navbar_show_container';

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchBusiness(this.props.businessId);
  }

  ratingSign() {
    let dollarSign = [];
    for (let i = 0; i < this.props.business.rating; i++) {
      dollarSign.push('$');
    }
    return dollarSign.join('');
  }

  phoneNumber() {
    let array = this.props.business.phoneNumber.split('');
    if(array[3] === undefined) {
      return this.props.business.phoneNumber;
    }
    return `(${array[0]}${array[1]}${array[2]}) ${array[3]}${array[4]}${array[5]}-${array[6]}${array[7]}${array[8]}${array[9]}`
  }



  render() {
    if (this.props.business === undefined) {
      return "";
    }
    return (
      <div>
        <NavBarShowContainer />
        <div className="main">
          <div className="main-header">
            <div className="business-header-info-container">
              <div className="business-header-info">
                <div>
                  <div>
                    {this.props.business.businessName}
                  </div>
                  <div id="rating-sign">
                    {this.ratingSign()}
                  </div>
                </div>
                <div className="under-header-right">
                  <div>
                    <input id="write-a-review" type="button" value="Write a Review" />
                  </div>
                  <div className="add-share-save">
                    <input type="button" id="add-photo" value="Add Photo" />
                    <input type="button" id="add-photo" value="Share" />
                    <input type="button" id="add-photo" value="Save" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="info-pictures-container">
            <div className="info-pictures">
              <div className="mapbox-container">
              <div className="mapbox">
                <div>
                    <img alt="Map" height="135" src="https://maps.googleapis.com/maps/api/staticmap?scale=2&amp;center=37.799607%2C-122.407305&amp;language=None&amp;zoom=15&amp;markers=scale%3A2%7Cicon%3Ahttps%3A%2F%2Fyelp-images.s3.amazonaws.com%2Fassets%2Fmap-markers%2Fannotation_64x86.png%7C37.799607%2C-122.407305&amp;client=gme-yelp&amp;sensor=false&amp;size=286x135&amp;signature=DEROAHn4U3svgGuQUypYsswInjk=" width="286" />
                </div>
              </div>
                <div>
                  {this.props.business.address1}
                </div>
                <div>
                  {this.phoneNumber()}
                </div>
              </div>
              <div className="restaurant-photo">
                <img  src={this.props.business.photos[0]} alt="" />
              </div>
            </div>
            
          </div>
        </div>
          <div className="show-body">
          <div className="temp">REVIEWS COMING SOON!!!!!!</div>
          <div className="temp">OTHER USEFUL INFORMATION</div>
          </div>
        
            
        
      </div>
    )
  }
}

export default BusinessShow;