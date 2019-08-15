 import React from 'react';
 import {Link} from 'react-router-dom';

  class NavBar extends React.Component{
    constructor(props){
      super(props);
    }

    dropdown(){
      document.getElementById("myDropdown").classList.toggle("show");
    }

     loggedIn(){
      let pictureURL = this.props.currentUser ? this.props.currentUser.picture : null
      if (this.props.currentUserId) {
        return (
          <div className="nav-container">
            <div className="nav">
              <div className="left-side-nav">
                <span>
                  <a
                    className="link-color"
                    href="https://github.com/jhspark17"
                  >
                    <i className="fab fa-github fa-2x" />
                  </a>
                  &nbsp; &nbsp;
                  <a
                    className="link-color"
                    href="https://www.linkedin.com/in/joseph-park-94b234111/"
                  >
                    <i className="fab fa-linkedin fa-2x" />
                  </a>
                  &nbsp; &nbsp;
                  <a
                    className="link-color"
                    href="https://angel.co/jhspark17?public_profile=1"
                  >
                    <i className="fab fa-angellist fa-2x" />
                  </a>
                </span>
                {/* <div className="left-side-element">Write a Review</div>
                <div className="left-side-element">Events</div>
                <div className="left-side-element">Talk</div> */}
              </div>
              <div id="logout-nav">
                <div className="dropdown">
                  <img
                    onClick={this.dropdown}
                    className="logout-nav-show-picture"
                    src={`${pictureURL}`}
                    alt=""
                  />
                  <div id="myDropdown" className="dropdown-content">
                    <div className="top-dropdown">
                      Hello, {this.props.currentUser.firstName}
                    </div>
                    <div>
                      <input
                        className="logout-button"
                        type="submit"
                        onClick={this.props.signOut}
                        value="Log Out"
                      />
                    </div>
                  </div>
                  <i className="arrow-icon">arrow_drop_down</i>
                </div>
              </div>
            </div>
          </div>
        );   
      } else {
        return (
          <div className="nav-container">
            <div className="nav">
              <div className="left-side-nav">
                <span>
                  <a
                    className="link-color"
                    href="https://github.com/jhspark17"
                  >
                    <i className="fab fa-github fa-2x" />
                  </a>
                  &nbsp; &nbsp;
                  <a
                    className="link-color"
                    href="https://www.linkedin.com/in/joseph-park-94b234111/"
                  >
                    <i className="fab fa-linkedin fa-2x" />
                  </a>
                  &nbsp; &nbsp;
                  <a
                    className="link-color"
                    href="https://angel.co/jhspark17?public_profile=1"
                  >
                    <i className="fab fa-angellist fa-2x" />
                  </a>
                </span>
              </div>
              <div className="right-side-nav">
                <Link id="signin-nav" to="/signin">
                  Log In
                </Link>
                <Link id="signup-nav" to="/signup">
                  Sign Up
                </Link>
                <button id="demo-nav" onClick={this.props.demoSignIn}>
                  Demo Login
                </button>
              </div>
            </div>
          </div>
        );
      }
    }

    render(){
      return(
        <div> 
          {this.loggedIn()}
        </div>
      )
    }
  }
  
  
  export default NavBar;
    
    


  
