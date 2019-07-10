import React from 'react';
import {connect} from 'react-redux';
import BusinessShow from './business_show';
import { fetchBusiness} from '../../actions/business_actions';
import {deleteReview} from '../../actions/review_actions'
import {demoSignIn} from '../../actions/session_actions';
import {findAvgRatingShow} from '../../reducers/selectors'


const mapStateToProps = (state, ownProps) => {
  const businessId = ownProps.match.params.businessId;
  const currentUser = state.session.currentUser
  // if (reviews.length > 0 && stateTemp.length > 0) {
    
    
  //   state.entities.businesses[businessId].avgRating = rating;
  // }
  
return({
  currentUser,
  business: state.entities.businesses[businessId],
});
};

const mapDispatchToProps = dispatch => ({
  fetchBusiness: id => dispatch(fetchBusiness(id)),
  demoSignIn: (demoUser) => dispatch(demoSignIn(demoUser)),
  deleteReview: (id) => dispatch(deleteReview(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow)