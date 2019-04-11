import React from 'react';
import {connect} from 'react-redux';
import BusinessShow from './business_show';
import { fetchBusiness} from '../../actions/business_actions';
import {demoSignIn} from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
  const businessId = ownProps.match.params.businessId;
  const reviews = Object.values(state.entities.reviews);
  const users = Object.values(state.entities.users)
  debugger
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


export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);