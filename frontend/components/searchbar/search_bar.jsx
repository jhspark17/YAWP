import React, {useEffect, useState} from "react"
import HomeSearch from "./home_search"
import NavBarSearch from "./navbar_search"

const SearchBar = props => {
  if (props.type === undefined) {
    return (
      <HomeSearch searchBusiness={props.searchBusinesses} match={props.match} history={props.history}/>
    );
  } else {
    return (
      <NavBarSearch searchBusiness={props.searchBusinesses} match={props.match} history={props.history} />
    );
  }
}

export default SearchBar