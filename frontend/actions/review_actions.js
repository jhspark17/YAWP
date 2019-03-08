import * as ReviewApiUtil from "../util/review_api_util";

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

const receiveReview = (payload) => ({
  type:   RECEIVE_REVIEW,
  review: payload.review,
  user:   payload.user
});

const removeReview = (payload) => ({
  type: REMOVE_REVIEW,
  reviewId: payload.reviewId
});


export const createReview = review => dispatch => {
return ReviewApiUtil.createReview(review)
  .then(review => dispatch(receiveReview(review)));
};

export const updateReview = review => dispatch => {
  return ReviewApiUtil.updateReview(review)
  .then(review => dispatch(receiveReview(review)));
};

export const deleteReview = reviewId => {
  return ReviewApiUtil.deleteReview(reviewId)
  .then(() => dispatch(removeReview(reviewId)));
};


