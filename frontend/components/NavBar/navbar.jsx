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
      if (this.props.currentUserId) {
        return(
          <div className="nav">
            <div className="left-side-nav">
              <div className="left-side-element">Write a Review</div>
              <div className="left-side-element">Events</div>
              <div className="left-side-element">Talk</div>
            </div>
            <div id="logout-nav">
              <div class="dropdown">
                <button onClick={this.dropdown} class="dropbtn"><i class="fas fa-user"></i></button>
                  <div id="myDropdown" class="dropdown-content">
                  <input type="submit" onClick={this.props.signOut} value="Log Out" />
                </div>
              </div>
                </div>
              </div>
        )
      } else {
        return(
          <div className="nav">
            <div className="left-side-nav">
              <div className="left-side-element">Write a Review</div>
              <div className="left-side-element">Events</div>
              <div className="left-side-element">Talk</div>
            </div>
            <div className="right-side-nav">
              <Link id="signin-nav" to="/signin">Log In</Link>
              <Link id="signup-nav" to="/signup">Sign Up</Link>
              <button id="demo-nav" onClick={this.props.demoSignIn}>Demo Login</button>
            </div>
          </div>
        )
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
    
    


  
