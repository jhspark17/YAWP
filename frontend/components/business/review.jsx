import React, {useState, useEffect} from 'react';


const Review = props => {
debugger
const checkUser = () => {
    if (!props.currentUser) return;
    if (props.currentUser === props.review.userId) {
      return (
        <i
          class="fas fa-trash-alt fa-2x"
          onClick={() => props.deleteReview()}
        />
      );
    }
    return ""
  }

const deleteReview = () => {
    props.delete(props.review.id)
    .then(() =>
      this.props.history.push(`/businesses/${this.props.businessId}`)
    );
  }

  const getDate = () => {
    let date = props.review.updatedAt;
    if (date === undefined) {
      return null;
    }
    return `${date.slice(5, 7)}/${date.slice(8, 10)}/${date.slice(0, 4)}`;
  }

  let picture = props.review.picture;
  let userRating = props.review.rating * 2

const content = (
      <>
        <div className="comment-box-container">
          <div className="comment-box-profile">
            <img class="review-user-pic" src={picture} />
            <div>{`${props.review.firstName}`}</div>
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
              <div className="review-text-body">{props.review.body}</div>
              {checkUser()}
            </div>
          </div>
        </div>
      </>
    );
  return content;
}

export default Review