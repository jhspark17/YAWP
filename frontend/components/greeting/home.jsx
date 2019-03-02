import React from 'react';
import NavBarContainer from "../NavBar/navbar_container";

const Home = () => {
  return(
    <div >
      <header className="header-all">
      <NavBarContainer />
      <div className="header-body">
      <div id="logo">
          <div id="word-logo">
            yawp
          </div>
          <div id="icon-logo">
              <i className="fas fa-globe"></i>
          </div>
      </div>
      </div>
      </header>
        <h1 id="temp">Business coming soon!!</h1>
    </div>
  )
}

export default Home;