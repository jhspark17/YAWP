import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from "../searchbar/search_bar_container"

class NavBarShow extends React.Component {
  constructor(props) {
    super(props);
  }

  dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  loggedIn() {
    if (this.props.currentUserId) {
      return (
        <div>
          <div className="nav-show">
            <div className="nav-show-inner">
              <div className="left-side-nav-show">
                <Link to="/">
                  <div id="header-word-logo">
                    yawp<i id="icon-logo" className="fas fa-globe"></i>
                  </div>
                </Link>
              </div>
              <SearchBarContainer />
              <div className="dropdown">
                <div id="logout-nav-show">
                  <button onClick={this.dropdown} class="dropbtn"><i class="fas fa-user"></i></button>
                  <div id="myDropdown" class="dropdown-content">
                    <input className="logout-button" type="submit" onClick={this.props.signOut} value="Log Out" />
                  </div>
                  <i className="arrow-icon">arrow_drop_down</i>
                </div>
              </div>
            </div>
          </div>
          <div className="under-header-container">
            <div className="under-header">
              <div className="under-header-left">
                <div>Food</div>
                <div>Drinks</div>
                <div>Other</div>
              </div>
              <div className="under-header-right">
                <div>All Businesses</div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="nav-show">
            <div className="nav-show-inner">
              <div className="left-side-nav-show">
                <Link to="/">
                  <div id="header-word-logo">
                    yawp<i id="icon-logo" className="fas fa-globe"></i>
                  </div>
                </Link>
              </div>
              <div className="right-side-nav-show">
                <Link className="show-nav-login" to="/signin">Log In</Link>
                <Link id="signup-nav" to="/signup">Sign Up</Link>
                <button id="demo-nav" onClick={this.props.demoSignIn}>Demo Login</button>
              </div>
            </div>
          </div>
          <div className="under-header-container">
            <div className="under-header">
              <div className="under-header-left">
                <div>Food</div>
                <div>Drinks</div>
                <div>Other</div>
              </div>
              <div className="under-header-right">
                <div>
                  All Businesses
                  </div> 
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {

    return (
      <div>
        {this.loggedIn()}
      </div>
    )
  }
}


export default NavBarShow;
