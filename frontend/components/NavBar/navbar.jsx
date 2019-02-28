 import React from 'react';
 import {Link} from 'react-router-dom';


   export default ({currentUserId, signOut, currentUser, demoSignIn}) => {
    const display =  currentUserId ? (
      <div>
        <p>Hello {currentUser.first_name}</p>
        <button onClick={signOut}>Log Out</button>
      </div>
    ) : (
        <div >
         <div>
          <Link className="signin-nav" to="/signin">Login</Link>
          <Link className="signup-nav" to="/signup">Sign Up</Link>
            <button onClick={demoSignIn}>Demo Login</button>
        </div>
       </div>
    );

    return(
      <header>
        <div className="nav">
          <h1>YAWP</h1>
          {display}
          </ div>
      </header>
    )
   }
    
    
    


  
