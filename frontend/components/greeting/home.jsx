import React from "react";
import NavBarContainer from "../NavBar/navbar_container";
import SearchBarContainer from "../searchbar/search_bar_container";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger;
    this.props.fetchBusinesses();
  }

 

  render() {
    if (this.props.businesses.length === 0) {
      return "";
    }
    return (
      <div>
        <header className="header-all-container">
          <div className="header-all">
            <NavBarContainer />
            <div id="logo">
              <div id="word-logo">yawp</div>
              <div id="icon-logo">
                <i className="fas fa-globe" />
              </div>
            </div>
            <SearchBarContainer />
          </div>
        </header>
        <div className="home-body">
          <div>
            <div className="san-francisco">Yawp San Francisco</div>
          </div>
          <div className="city-names-container">
            <div>New York</div>
            <div>San Jose</div>
            <div>Los Angeles</div>
            <div>Chicago</div>
            <div>Palo Alto</div>
            <div>Oakland</div>
            <div>More Cities</div>
          </div>
          <div/>
          <div className="top-restaurants-in-sf">
            <div className="top-spots">Top Spots</div>
          </div>
          <div className="home-restaurant-container">
            <div className="home-restaurants">
              <div className="home-restaurant">
                <div className="home-restaurant-photo">
                  <img src={`${this.props.businesses[0].photos}`} alt="" />
                </div>
                <div className="home-business-description">
                  <Link
                    className="title-business-description"
                    to="/businesses/1"
                  >
                    {this.props.businesses[0].businessName}
                  </Link>
                  <div className="category-business-description">Japanese</div>
                  <div className="category-business-description">
                    Embarcadero
                  </div>
                </div>
              </div>
              <div className="home-restaurant">
                <div className="home-restaurant-photo">
                  <img src={`${this.props.businesses[3].photos}`} alt="" />
                </div>
                <div className="home-business-description">
                  <Link
                    to="/businesses/4"
                    className="title-business-description"
                  >
                    {this.props.businesses[3].businessName}
                  </Link>
                  <div className="category-business-description">Boba</div>
                  <div className="category-business-description">Chinatown</div>
                </div>
              </div>
              <div className="home-restaurant">
                <div className="title-home" />
                <div className="home-restaurant-photo">
                  <img src={`${this.props.businesses[6].photos}`} alt="" />
                </div>
                <div className="home-business-description">
                  <Link
                    to="/businesses/7"
                    className="title-business-description"
                  >
                    {this.props.businesses[6].businessName}
                  </Link>
                  <div className="category-business-description">Cafe</div>
                  <div className="category-business-description">
                    North Beach
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
