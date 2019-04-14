import React from 'react'
import BusinessIndexItem from "./business_index_item";
import BusinessMap from "./business_map"
import NavBarShowContainer from '../NavBar/navbar_show_container';

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.fetchBusinesses();
  }

  phoneNumber(){
  
  }

 render(){
    if (!this.props.businesses[0]) {
      return null;
    }
    return (
      <div>
        <NavBarShowContainer type="non-home" />
        <div className="filter-container">
          <div className="filter">
            <div className="filter-right">Best Places in San Francisco</div>
            <div className="filter-left">Showing 1-9 of 9</div>
          </div>
        </div>
        <div className="index-main">
          <div>
            <ul>
              {this.props.businesses.map(business => (
                <BusinessIndexItem business={business} key={business.id} />
              ))}
            </ul>
          </div>
          <BusinessMap />
        </div>
      </div>
    );
  }
}

export default BusinessIndex;