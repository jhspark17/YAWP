import React from "react";


class SearchBar extends React.Component {
  constructor(props){
    super(props);
  }

  update(){

  }


  render(){
    return(
     <form className="search-bar" >
      <div>
        <span className="description find">Find</span>
          <span className="description input ">
        <input type="text" onChange={this.update('query')} placeholder="burgers,boba,coffee..." />
          </span>
        </div>
        <div>
        <span className="description border-near ">Near</span>
          <span className="description "> 
        <input type="text"/>
          </span>
        </div>
          <button id="search-submit"  type="submit"><i  class="material-icons">search</i></button>
     </form>
    )
  }
}

export default SearchBar