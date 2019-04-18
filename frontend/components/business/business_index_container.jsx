import React from 'react';
import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { fetchBusinesses} from '../../actions/business_actions';
import {fetchReviews } from '../../actions/review_actions'
import {findAvgRating} from '../../reducers/selectors'

const mapStateToProps = state => {
  let businesses = Object.values(state.entities.businesses)
  let reviews = Object.values(state.entities.reviews)
  for (let i = 0; i < businesses.length; i ++) {
    let business = businesses[i];
    let avg = findAvgRating(state, business.id);
    business.avgRating = avg
  }
  return ({
    currentUser: state.session.currentUser,
    businesses,
    reviews
  });
};


const mapDispatchToProps = dispatch => ({
  fetchBusinesses: () => dispatch(fetchBusinesses()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);


