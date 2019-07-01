import React, {useEffect, useState} from "react"
import HomeSearch from "./home_search"
import NavBarSearch from "./navbar_search"

const SearchBar = props => {
  if (props.type === undefined) {
    return (
      <HomeSearch />
    );
  } else {
    return (
      <NavBarSearch />
    );
  }
}


export default SearchBar