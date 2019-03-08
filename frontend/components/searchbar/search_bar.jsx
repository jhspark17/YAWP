import React from "react";
import {Link} from "react-router-dom"

class SearchBar extends React.Component {
  constructor(props){
    super(props);
  }



  render(){
    return(
     <form className="search-bar" >
      
        <span className="description find">Find</span>
        <input className="left-side-search" type="text" placeholder="burgers,boba,coffee..." />
        <span className="description border-near ">Near</span>
        <input className="middle-search" type="text" placeholder="App Academy"/>
        
        <button id="search-submit" type="submit"><Link to="/businesses"><i class="material-icons">search</i></Link></button>
     </form>
    )
  }
}

export default SearchBar