import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const MainContentHeader = props => {
const {business, match, currentUser} = props

const hasReview = () => {
  if (!currentUser) {
    return (
      <Link to={`/signin`}>
        <input id="write-a-review" type="button" value="Write a Review" />
      </Link>
    );
  }

  for (let i = 0; i < business.reviews.length; i++) {
    let userId = business.reviews[i].userId;
    if (userId === currentUser) {
      return (
        <Link
          to={`/businesses/${match.params.businessId}/reviews/${
            business.reviews[i].id
          }`}
        >
        <input id="write-a-review" type="button" value="Update Review" />
        </Link>
      );
    }
  }
  return (
    <Link to={`/businesses/${match.params.businessId}/reviews`}>
      <input id="write-a-review" type="button" value="Write a Review" />
    </Link>
  );
};

 const finalRating = () => {
   let sum = 0;

   business.reviews.forEach(review => {
     sum += review.rating;
   });

   return Math.floor(sum / business.reviews.length) * 2;
 };



const content = (<div className="main-header">
    <div className="business-header-info-container">
      <div className="business-header-info">
        <div>
          <div>{business.businessName}</div>
          <img
            className={`star-lrg-${finalRating()}` + ` star-lrg`}
            src="https://i.imgur.com/UkZkm0D.png"
          />
          <div>$$</div>
        </div>

        <div className="under-header-right">
          <div>{hasReview()}</div>
        </div>
      </div>
    </div>
  </div>)

  return content;
}

export default MainContentHeader