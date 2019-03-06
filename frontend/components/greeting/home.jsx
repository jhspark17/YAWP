import React from 'react';
import NavBarContainer from "../NavBar/navbar_container";
import SearchBarContainer from "../searchbar/search_bar_container"
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
        <header className="header-all-container">
          <div className="header-all">
            <NavBarContainer />
            <div id="logo">
              <div id="word-logo">
                yawp
          </div>
              <div id="icon-logo">
                <i className="fas fa-globe"></i>
              </div>
            </div>
            <SearchBarContainer />
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
                  <Link to="/businesses/1">Page</Link>
                </div>
              </div>
              <div className="home-restaurant">
                <div className="title-home">{this.props.businesses[3].businessName}</div>
                <div className="home-restaurant-photo">
                  <img src={`${this.props.businesses[3].photos}`} alt="" />
                </div>
                <div>
                  <Link to="/businesses/3">Page</Link>
                </div>
              </div>
              <div className="home-restaurant">
                <div className="title-home">{this.props.businesses[6].businessName}</div>
                <div className="home-restaurant-photo">
                  <img src={`${this.props.businesses[6].photos}`} alt="" />
                </div>
                <div>
                  <Link to="/businesses/6">Page</Link>
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