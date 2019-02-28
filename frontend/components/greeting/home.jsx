import React from 'react';
import NavBarContainer from "../NavBar/navbar_container";

const Home = () => {
  return(
    <div className="header-all">
      <NavBarContainer />
      <div className="header-body">
      <div className="logo">
      YAWP
      </div>
      </div>
    </div>
  )
}

export default Home;