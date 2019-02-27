import React from 'react';
import NavBar from "../NavBar/navbar";
import Greeting from "./greeting";
const Home = () => {
  return(
    <div>
      <NavBar />
      <div className="home-body">YAWP</div>
    </div>
  )
}

export default Home;