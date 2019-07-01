import React from 'react';
import {connect} from 'react-redux';
import SearchBar from './search_bar';
import {searchBusinesses} from '../../actions/business_actions';


const mapStateToProps = (state, ownProps) => {
  return({
    type: ownProps.type,
  })
};

const mapDispatchToProps = (dispatch) => {
  return({
    searchBusinesses: (search) => dispatch(searchBusinesses(search))
  })
}



export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)