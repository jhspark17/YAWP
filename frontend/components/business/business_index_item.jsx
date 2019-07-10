import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'

const BusinessIndexItem = props => {

  const phoneNumber = () => {
    if (props.business.phoneNumber.split('').length < 6) {
      return "N/A"
    }
    return `(${props.business.phoneNumber.slice(0, 3)}) ${props.business.phoneNumber.slice(3, 6)}-${props.business.phoneNumber.slice(6, 10)}`
  }

  const pickPrice = () => {
    let price = [];
    let num = Math.floor(Math.random() * 4) + 1
    for (let i = 0; i < num; i++) {
      price.push("$")
    }
    return price.join('')
  }


  const starRating = () => {
    let sum = 0;

    props.business.reviews.forEach(review => {
      sum += review.rating
    })

   return Math.floor(sum / props.business.reviews.length) * 2;
  }

  const pickComment = () => {
    return( 
       <div className="index-comment">
         {props.business.reviews[Object.keys(props.business.reviews)[0]].body}
       </div>)
  }


 const getStars = (num) => {
  let stars = [];

  for (let i = 0; i < num; i++) {
    stars.push(<div key={i} className={`mystar fa fa-star checked`}></div>);
  }
  return (stars);
}


 const content = (
      <div className="business-index-container">
        <div className="business-index">
          <div className="business-index-photo">
            <img src={`${props.business.photos}`} alt="" />
          </div>
          <div className="business-index-info">
            <div className="business-index-info-top">
              <div className="business-index-info-left">
                <Link
                  className="title-business-description"
                  to={`/businesses/${props.business.id}`}
                >
                  {props.business.businessName}
                </Link>
                <div>
                  <img
                    className={`star-medium-${starRating()}` + " star-medium"}
                    src="https://i.imgur.com/UkZkm0D.png"
                  />
                  <span className="review-text">
                    {" "}
                    {Object.keys(props.business.reviews).length} reviews
                  </span>
                </div>
                <div>{pickPrice()}</div>
              </div>
              <div className="business-index-info-right">
                <div>{phoneNumber()}</div>
                <div>{props.business.address1}</div>
                <div> {props.business.city}</div>
              </div>
            </div>
            <div>
              {pickComment()}
            </div>
          </div>
        </div>
      </div>
    );
    return content;
  }




export default BusinessIndexItem;