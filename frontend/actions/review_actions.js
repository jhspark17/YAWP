import * as ReviewApiUtil from "../util/review_api_util";

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

const receiveReview = (payload) => ({
  type:   RECEIVE_REVIEW,
  review: payload.review,
  user:   payload.user
});

const removeReview = (payload) => {
  return({
  type: REMOVE_REVIEW,
  reviewId: payload.review.id
  })
};


export const createReview = review => dispatch => {
return ReviewApiUtil.createReview(review)
  .then(review => dispatch(receiveReview(review)));
};

export const updateReview = review => dispatch => {
  return ReviewApiUtil.updateReview(review)
  .then(review => dispatch(receiveReview(review)));
};

export const deleteReview = reviewId => dispatch => {
  return ReviewApiUtil.deleteReview(reviewId)
  .then(reviewId => dispatch(removeReview(reviewId)));
};


