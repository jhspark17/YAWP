import React, {useState, useEffect} from 'react';
import { Route, withRouter } from "react-router-dom";


const Review = props => {
  const {deleteReview, id, review, business, key, currentUser} = props

  const checkUser = () => {
      if (!currentUser) return;
      if (currentUser === review.userId) {
        return (
          <i
            className="fas fa-trash-alt fa-2x"
            onClick={() => {deleteReview(id)}}
          />
        );
      }
      return ""
    }

  // const deleteReview = () => {
  //     debugger
  //     delete(props.review.id)
  //     .then(() => {
  //       debugger
  //       props.history.push(`/businesses/${props.business.id}`)
  //     });
  //   }

    const getDate = () => {
      let date = props.review.updatedAt;
      if (date === undefined) {
        return null;
      }
      return `${date.slice(5, 7)}/${date.slice(8, 10)}/${date.slice(0, 4)}`;
    }

    let picture = review.picture;
    let userRating = review.rating * 2

  const content = (
        <>
          <div className="comment-box-container">
            <div className="comment-box-profile">
              <img className="review-user-pic" src={picture} />
              <div>{`${review.firstName}`}</div>
            </div>
            <div className="comment-box-body">
              <div className="comment-box-rating-date">
                <img
                  className={`star-medium-${userRating}` + " star-medium"}
                  src="https://i.imgur.com/UkZkm0D.png"
                />
                <span>{getDate()}</span>
              </div>
              <div className="review-body">
                <div className="review-text-body">{review.body}</div>
                {checkUser()}
              </div>
            </div>
          </div>
        </>
      );
    return content;
  }


  export default withRouter(Review)