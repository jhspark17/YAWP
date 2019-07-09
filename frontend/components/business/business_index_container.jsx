import React from 'react';
import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { fetchBusinesses} from '../../actions/business_actions';
import {fetchReviews } from '../../actions/review_actions'
import {findAvgRating} from '../../reducers/selectors'

const mapStateToProps = state => {
  debugger
  let businesses = Object.values(state.entities.businesses)
//   if (businesses.length > 0) {
//   for (let i = 0; i < businesses.length; i ++) {
//     let business = businesses[i];
//     let avg = findAvgRating(state, business.id);
//     business.avgRating = avg
//   }
// }
  return ({
    currentUser: state.session.currentUser,
    businesses,
  });
};


const mapDispatchToProps = dispatch => ({
  fetchBusinesses: () => dispatch(fetchBusinesses()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);


