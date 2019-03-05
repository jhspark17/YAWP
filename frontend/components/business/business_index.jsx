import React from 'react'
import BusinessIndexItem from "./business_index_item";
import NavBarShowContainer from '../NavBar/navbar_show_container';
class BusinessIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.fetchBusinesses();
  }

  render(){
    if (!this.props.businesses[0]) {
      return null;
    }
    return(
      <div>
        <NavBarShowContainer />
        <div className="index-main">
          <ul>
          {this.props.businesses.map(business => 
              <BusinessIndexItem business={business} key={business.id} />
            )}
          </ul>
        
        <div>
          map
        </div>
        </div>
      </div>
    )
  }
}

export default BusinessIndex;