import React, {useEffect, useState} from "react"
import HomeSearch from "./home_search"
import NavBarSearch from "./navbar_search"

const SearchBar = props => {
  if (props.type === undefined) {
    return (
      <HomeSearch searchBusiness={props.searchBusinesses}/>
    );
  } else {
    return <NavBarSearch searchBusiness={props.searchBusinesses} />;
  }
}


export default SearchBar