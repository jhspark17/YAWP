import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";


const HomeSearch = props => {
   const [search, setSearch] = useState("");
   const searchBusiness = props.searchBusiness
   
   const onSubmit = e => {
     debugger;
     e.preventDefault();
     searchBusiness(search)
   }

   const update = () => {
    return e => setSearch(e.target.value);
   };

   

  const searchBar = ( <form className="search-bar" onSubmit={onSubmit}>
        <span className="description find">Find</span>
        <input
          className="left-side-search"
          type="text"
          placeholder="restaurants, boba, coffee..."
          onChange={update()}
        />
        <span className="description border-near ">Near</span>
        <input
          className="middle-search"
          type="text"
          placeholder="App Academy"
        />

        <button id="search-submit" type="submit">
            <i class="material-icons">search</i>
        </button>
      </form>
  )
  return searchBar;
}

export default HomeSearch