import React from "react";
import { Link } from "react-router-dom";
import SearchBarContainer from "../searchbar/search_bar_container";
import UnderHeaderShow from "./under_header_show";

const NavBarShow = props => {
  const {currentUserId, type, currentUser, signOut, demoSignIn} = props
  
  const dropDown = () => {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  const loggedIn = () => {
    if (currentUserId) {
      return(
        <div>
          <div className="nav-show">
            <div className="nav-show-inner">
              <div className="left-side-nav-show">
                <Link className="header-word-logo-decoration" to="/">
                  <div id="header-word-logo">
                    yawp
                    <i id="icon-logo" className="fas fa-globe" />
                  </div>
                </Link>
              </div>
              <SearchBarContainer type={type} />
              <div className="dropdown">
                <div id="logout-nav-show">
                    <img
                      onClick={dropDown}
                      className="logout-nav-show-picture"
                      src={`${currentUser.picture}`}
                      alt=""
                    />
                  <div id="myDropdown" className="dropdown-content">
                    <div className="top-dropdown">
                      Hello, {currentUser.firstName}
                    </div>
                    <input
                      className="logout-button"
                      type="submit"
                      onClick={signOut}
                      value="Log Out"
                    />
                  </div>
                  <i className="arrow-icon">arrow_drop_down</i>
                </div>
              </div>
            </div>
          </div>
          <div className="under-header-container">
           <UnderHeaderShow />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="nav-show">
            <div className="nav-show-inner">
              <div className="left-side-nav-show">
                <Link className="header-word-logo-decoration" to="/">
                  <div id="header-word-logo">
                    yawp
                    <i id="icon-logo" className="fas fa-globe" />
                  </div>
                </Link>
              </div>
              <SearchBarContainer type={type} />
              <div className="right-side-nav-show">
                <button id="demo-nav" onClick={demoSignIn}>
                  Demo Login
                </button>
              </div>
            </div>
          </div>
          <div className="under-header-container">
            <UnderHeaderShow />
          </div>
        </div>
      );
    }
  }

  return loggedIn()
}

// class NavBarShow extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   dropdown() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }

//   loggedIn() {
   
//     if (this.props.currentUserId) {
//       return (
//         <div>
//           <div className="nav-show">
//             <div className="nav-show-inner">
//               <div className="left-side-nav-show">
//                 <Link className="header-word-logo-decoration" to="/">
//                   <div id="header-word-logo">
//                     yawp
//                     <i id="icon-logo" className="fas fa-globe" />
//                   </div>
//                 </Link>
//               </div>
//               <SearchBarContainer type={this.props.type} />
//               <div className="dropdown">
//                 <div id="logout-nav-show">
               
//                     <img
//                       onClick={this.dropdown}
//                       className="logout-nav-show-picture"
//                       src={`${this.props.currentUser.picture}`}
//                       alt=""
//                     />
                 
//                   <div id="myDropdown" className="dropdown-content">
//                     <div className="top-dropdown">
//                       Hello, {this.props.currentUser.firstName}
//                     </div>
//                     <input
//                       className="logout-button"
//                       type="submit"
//                       onClick={this.props.signOut}
//                       value="Log Out"
//                     />
//                   </div>
//                   <i className="arrow-icon">arrow_drop_down</i>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="under-header-container">
//             <div className="under-header">
//               <div className="under-header-left">
//                 <div>Food</div>
//                 <div id="under-header-left-middle">Drinks</div>
//                 <div>Other</div>
//               </div>
//               <div className="under-header-right">
//                 <div>All Businesses</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <div className="nav-show">
//             <div className="nav-show-inner">
//               <div className="left-side-nav-show">
//                 <Link className="header-word-logo-decoration" to="/">
//                   <div id="header-word-logo">
//                     yawp
//                     <i id="icon-logo" className="fas fa-globe" />
//                   </div>
//                 </Link>
//               </div>
//               <SearchBarContainer type={this.props.type} />
//               <div className="right-side-nav-show">
//                 <button id="demo-nav" onClick={this.props.demoSignIn}>
//                   Demo Login
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="under-header-container">
//             <div className="under-header">
//               <div className="under-header-left">
//                 <div>Food</div>
//                 <div id="under-header-left-middle">Drinks</div>
//                 <div>Other</div>
//               </div>
//               <div className="under-header-right">
//                 <div>All Businesses</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }

//   render() {
//     return <div>{this.loggedIn()}</div>;
//   }
// }

export default NavBarShow;
