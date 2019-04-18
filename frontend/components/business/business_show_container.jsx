import React from 'react';
import {connect} from 'react-redux';
import BusinessShow from './business_show';
import { fetchBusiness} from '../../actions/business_actions';
import {demoSignIn} from '../../actions/session_actions';
import {findAvgRatingShow} from '../../reducers/selectors'


const mapStateToProps = (state, ownProps) => {
  const stateTemp = Object.values(state.entities.businesses)
  const businessId = ownProps.match.params.businessId;
  const reviews = Object.values(state.entities.reviews);
  const users = Object.values(state.entities.users)
  if (reviews.length > 0 && stateTemp.length > 0) {
  let rating = findAvgRatingShow(state, businessId)
  
  state.entities.businesses[businessId].avgRating = rating;
  }
  
return({
  currentUser: state.session.currentUser,
  business: state.entities.businesses[businessId],
  reviews,
  users,
});
};

const mapDispatchToProps = dispatch => ({
  fetchBusiness: id => dispatch(fetchBusiness(id)),
  demoSignIn: (demoUser) => dispatch(demoSignIn(demoUser))
});


export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow)