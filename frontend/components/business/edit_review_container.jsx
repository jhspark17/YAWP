import { connect } from "react-redux";
import { updateReview } from "../../actions/review_actions";
import { fetchBusiness } from "../../actions/business_actions"
import ReviewForm from "./review_form";
import React from 'react';


const mapStateToProps = state => ({
  businesses: state.entities.businesses,
  currentUser: state.entities.users[state.session.id],
  review: state.entities.reviews[ownProps.match.params.reviewId],
  formType: 'Edit Review'
})

const mapDispatchToProps = dispatch => ({
  action: (review) => dispatch(createReview(review)),
  fetchBusiness: (id) => dispatch(fetchBusiness(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);