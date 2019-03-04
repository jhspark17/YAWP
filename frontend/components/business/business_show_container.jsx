import React from 'react';
import {connect} from 'react-redux';
import BusinessShow from './business_show';
import { fetchBusiness } from '../../actions/business_actions';


const mapStateToProps = (state, ownProps) => {
  const businessId = ownProps.match.params.businessId;
  
return({
  currentUser: state.entities.users[state.session.id],
  business: state.entities.businesses[businessId],
  businessId
});
};

const mapDispatchToProps = dispatch => ({
  fetchBusiness: id => dispatch(fetchBusiness(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);