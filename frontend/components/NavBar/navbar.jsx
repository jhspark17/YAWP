 import React from 'react';
 import {Link} from 'react-router-dom';

 export default ({currentUser, signOut}) => {
   const display = (
     <div>
       <Link className="signin-nav" to="/signin">Login</Link>
       <Link className="signup-nav" to="/signup">Sign Up</Link>
     </div>
   );

   return(
     <header className="nav">
       <div>YAWP</div>
       <div >{display}</div>
     </header>
   )
 }