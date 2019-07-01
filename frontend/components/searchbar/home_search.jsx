import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";


const HomeSearch = props => {
  const searchBar = ( <form className="search-bar">
        <span className="description find">Find</span>
        <input
          className="left-side-search"
          type="text"
          placeholder="restaurants, boba, coffee..."
        />
        <span className="description border-near ">Near</span>
        <input
          className="middle-search"
          type="text"
          placeholder="App Academy"
        />

        <button id="search-submit" type="submit">
          <Link to="/businesses">
            <i class="material-icons">search</i>
          </Link>
        </button>
      </form>
  )
  return searchBar;
}

export default HomeSearch