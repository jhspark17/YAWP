 import React from 'react';
 import {Link} from 'react-router-dom';

class NavBar extends React.Component {
constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
}

handleClick(e) {
  e.preventDefault();
  this.props.signOut();
}

  render() {
    let content = this.props.currentUser ?
     (<div className="nav">
        <h1>YAWP</h1>
        <div>
          <h3 >Welcome,{this.props.currentUser.first_name}</h3>
        </div>
        <button className="buttons" onClick={this.handleClick}>Sign Out</button>
      </div>) : (<div className="nav">
        <h1>YAWP</h1>
        <div>
        <Link className="signin-nav" to="/signin">Login</Link>
        <Link className="signup-nav" to="/signup">Sign Up</Link>
        </div>
      </div>);
      return content;
    } 
  }

  export default NavBar;
