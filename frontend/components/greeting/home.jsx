import React from 'react';
import NavBarContainer from "../NavBar/navbar_container";


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBusinesses();
  }


  render() {
    if (!this.props.businesses[0]) {
      return null
    }
    return (
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
        <div className="home-restaurant-container">
          <div className="home-restaurants" >
            <div className="home-restaurant">
              <div className="home-restaurant-photo"> 
                
              </div>
            </div>
            <div className="home-restaurant">

            </div>
            <div className="home-restaurant">

            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Home;