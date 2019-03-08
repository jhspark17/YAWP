import { RECEIVE_REVIEW, REMOVE_REVIEW} from "../actions/review_actions";
import {RECEIVE_BUSINESS} from "../actions/business_actions"
import {merge} from 'lodash'
const reviewsReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_BUSINESS:
       return action.payload.reviews; 
    case RECEIVE_REVIEW:
      newState = merge(newState, { [action.review.id]: action.review });
      return newState;
    case REMOVE_REVIEW:
      delete newState[action.reviewId];
      return newState;
    default:
     return newState;
  }
};

export default reviewsReducer;