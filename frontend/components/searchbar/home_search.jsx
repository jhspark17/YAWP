import React, {useEffect, useState} from 'react'
import { Link, Redirect } from "react-router-dom";

const HomeSearch = props => {
   const {searchBusiness, match, history, businesses} = props
   const [search, setSearch] = useState("");
   
   const onSubmit = e => {
     e.preventDefault();   

     searchBusiness(search.toLowerCase()).then(() => history.push('/businesses/search'))
   }

   const update = () => {
    return e => setSearch(e.target.value);
   };


   const searchBar = ( 
    <form className="search-bar" onSubmit={onSubmit}>
        <span className="description find">Find</span>
        <input
          className="left-side-search"
          type="text"
          placeholder="restaurants, boba, coffee..."
          name="q"
          onChange={update()}
        />
        <span className="description border-near ">Near</span>
        <input
          className="middle-search"
          type="text"
          placeholder="App Academy"
        />
     

        <button id="search-submit" type="submit">
            <i className="material-icons">search</i>
        </button>

      </form>
  )
  return searchBar;
}

export default HomeSearch