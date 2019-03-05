import React from 'react';
import NavBarContainer from "../NavBar/navbar_container";
import { Link } from 'react-router-dom'

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
        <div className="home-body">
          <div className="san-francisco">
            <div>Yelp in San Francisco</div>
          </div>
          <div className="city-names">
            <div>
              Los Angeles
                </div>
            <div>
              New York
                </div>
            <div>
              Seoul
                </div>
            <div>
              London
                </div>
            <div>
              Rome
                </div>
          </div>
          <div>
            <div className="business-index-home-container">
              <div className="business-index-home">
                <div>
                  
                </div>
                <Link to="/businesses"><i class="material-icons">business</i></Link>
              </div>
            </div>
          </div>
          <div className="top-restaurants-in-sf">
            <div>Top Restaurants in San Francisco</div>
          </div>
          <div className="home-restaurant-container">
            <div className="home-restaurants" >
              <div className="home-restaurant">
                <div className="title-home">{this.props.businesses[0].businessName}</div>
                <div className="home-restaurant-photo">
                  <img src={`${this.props.businesses[0].photos}`} alt="" />
                </div>
                <div>
                  <Link to="/businesses/10">Page</Link>
                </div>
              </div>
              <div className="home-restaurant">
                <div className="title-home">{this.props.businesses[3].businessName}</div>
                <div className="home-restaurant-photo">
                  <img src={`${this.props.businesses[3].photos}`} alt="" />
                </div>
                <div>
                  <Link to="/businesses/13">Page</Link>
                </div>
              </div>
              <div className="home-restaurant">
                <div className="title-home">{this.props.businesses[6].businessName}</div>
                <div className="home-restaurant-photo">
                  <img src={`${this.props.businesses[6].photos}`} alt="" />
                </div>
                <div>
                  <Link to="/businesses/16">Page</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Home;