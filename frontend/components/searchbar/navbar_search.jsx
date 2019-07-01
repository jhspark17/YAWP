import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";

const NavBarSearch = props => {
  const [search, setSerach] = useState("");
  
  const update = () => {
    return e =>
      setSerach(e.target.value)
  }

  const searchBar = (
    <form className="search-bar-show">
      <span className="description find">Find</span>
      <input
        className="left-side-search"
        type="text"
        placeholder="restaurants, boba, coffee..."
      />
      <span className="description border-near">Near</span>
      <input
        className="middle-search"
        type="text"
        placeholder="App Academy"
        onChange={update()}
      />
      <button id="search-submit" type="submit" >
        <Link to="/businesses">
          <i class="material-icons show-search-icon">search</i>
        </Link>
      </button>
    </form>
  );
  
  return searchBar;
}


export default NavBarSearch;

