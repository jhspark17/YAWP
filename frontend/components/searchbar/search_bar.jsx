import React, {useEffect, useState} from "react"
import HomeSearch from "./home_search"
import NavBarSearch from "./navbar_search"

const SearchBar = props => {
  const {searchBusinesses, match, history, businesses} = props
  if (props.type === undefined) {
    return (
      <HomeSearch searchBusiness={searchBusinesses} match={match} history={history} businesses={businesses}/>
    );
  } else {
    return (
      <NavBarSearch searchBusiness={props.searchBusinesses} match={props.match} history={props.history} />
    );
  }
}

export default SearchBar