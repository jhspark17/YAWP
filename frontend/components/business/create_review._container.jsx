import { connect } from "react-redux";
import {createReview} from "../../actions/review_actions";
import {fetchBusiness} from "../../actions/business_actions";
import {selectReviewsForBusiness} from "../../reducers/selectors";
import ReviewForm from "./review_form";
import React from 'react';

const mapStateToProps = (state, ownProps) => {
  let businessId = parseInt(ownProps.match.params.businessId);
  let business = state.entities.businesses[businessId];
  return({
  business,
  businessId,
  currentUser: state.session.currentUser,
  review: {body: ''},
  businessReviews: selectReviewsForBusiness(state, businessId),
  formType: 'Create Review'
  });
};

const mapDispatchToProps = dispatch => ({
  action: (review) => dispatch(createReview(review)),
  fetchBusiness: (id) => dispatch(fetchBusiness(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);