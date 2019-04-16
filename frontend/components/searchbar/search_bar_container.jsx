import React from 'react';
import {connect} from 'react-redux';
import SearchBar from './search_bar';


const mapStateToProps = (state, ownProps) => {
  return({
    type: ownProps.type,
  })
};



export default connect(mapStateToProps, null)(SearchBar)