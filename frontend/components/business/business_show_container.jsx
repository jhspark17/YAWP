import React from 'react';
import {connect} from 'react-redux';
import BusinessShow from './business_show';
import { fetchBusiness} from '../../actions/business_actions';
import {deleteReview} from '../../actions/review_actions'
import {demoSignIn} from '../../actions/session_actions';
import {findAvgRatingShow} from '../../reducers/selectors'


const mapStateToProps = (state, ownProps) => {
  const stateTemp = Object.values(state.entities.businesses)
  const businessId = ownProps.match.params.businessId;
  const reviews = Object.values(state.entities.reviews);
  const users = Object.values(state.entities.users)
  const currentUser = state.session.currentUser
  if (reviews.length > 0 && stateTemp.length > 0) {
  let rating = findAvgRatingShow(state, businessId)
  
  state.entities.businesses[businessId].avgRating = rating;
  debugger;
  }
  
return({
  currentUser: state.session.currentUser,
  business: state.entities.businesses[businessId],
  reviews,
  users,
  currentUser
});
};

const mapDispatchToProps = dispatch => ({
  fetchBusiness: id => dispatch(fetchBusiness(id)),
  demoSignIn: (demoUser) => dispatch(demoSignIn(demoUser)),
  delete: (id) => dispatch(deleteReview(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow)