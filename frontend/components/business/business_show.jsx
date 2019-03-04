import React from 'react';
import { Link } from 'react-router-dom';
class BusinessShow extends React.Component{
  constructor(props){
    super(props);    
  }
  componentDidMount(){
    this.props.fetchBusiness(this.props.businessId);
  }

  render(){
     if (this.props.business === undefined){
      return "";
    }
    return(
      <div>
        <header className="header-form">
          <div>
          <Link to="/">
            <div id="header-word-logo">
              yawp<i id="icon-logo" className="fas fa-globe"></i>
            </div>
          </Link> 
          </div>
       </header>
        <div className="show-title">
        {this.props.business.businessName}
        </div>
        <div className="show-information">
        <div>
          {this.props.business.address1}
          </div>
          <div>
          {this.props.business.phoneNumber}
          </div>
        </div>
      </div>
    )
  } 
  }
  
export default BusinessShow;