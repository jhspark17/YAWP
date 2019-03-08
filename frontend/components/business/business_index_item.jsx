import React from 'react';
import {Link} from 'react-router-dom'

class BusinessIndexItem extends React.Component{
  constructor(props) {
    super(props)
  }

  getStars(){
   let ratings = [];
   for (let i = 0; i < this.props.business.rating; i ++) {
     
   }
   return ratings.join('')
  }

  phoneNumber() {
    if (this.props.business.phoneNumber.split('').length < 6) {
      return "N/A"
    }
    return `(${this.props.business.phoneNumber.slice(0, 3)}) ${this.props.business.phoneNumber.slice(3, 6)}-${this.props.business.phoneNumber.slice(6, 10)}`
  }



  getStars(num) {
  let stars = [];

  

  for (let i = 0; i < num; i++) {
    stars.push(<div key={i} className={`mystar fa fa-star checked`}></div>);
  }
  return (stars);
}


  render(){
    return(
      <div className="business-index-container">
        <div className="business-index">
          <div className="business-index-photo">
            <img src={`${this.props.business.photos}`} alt="" />
          </div>
          <div className="business-index-info">
            <div className="business-index-info-left">
              <Link className="title-business-description" to={`/businesses/${this.props.business.id}`}>{this.props.business.businessName}</Link>
              <div className="index-item-rating">
                {this.getStars(this.props.business.rating)}
              </div>
            </div>
            <div className="business-index-info-right">
              <div>{this.phoneNumber()}</div>
              <div>{this.props.business.address1}</div>
              <div> {this.props.business.city}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default BusinessIndexItem;