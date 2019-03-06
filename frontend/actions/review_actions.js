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
  review: payload.review
})

export const createReview = review => dispatch => {
  ReviewApiUtil.createReview(review)
  .then(payload => dispatch(receiveReview(payload)));
};

export const updateReview = review => dispatch => {
  ReviewApiUtil.updateReview(review)
  .then(payload => dispatch(receiveReview(payload)));
};

export const deleteReview = review => {
  ReviewApiUtil.deleteReview(review.id)
  .then(payload => dispatch(removeReview(payload)));
};


