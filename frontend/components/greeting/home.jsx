import React from 'react';
import NavBar from "../NavBar/navbar";
import Greeting from "./greeting";
const Home = () => {
  return(
    <div className="header-all">
      <NavBar />
      <div className="header-body">YAWP</div>
    </div>
  )
}

export default Home;