import React from 'react';
import {Route} from 'react-router-dom';
import Home from './greeting/home';
import SignInContainer from "../components/session/signin_container";
import SignUpContainer from '../components/session/signup_container';
import {AuthRoute, ProtectedRoute} from "../util/route_util";
const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <AuthRoute path="/signin" component={SignInContainer} />
    <AuthRoute path="/signup" component={SignUpContainer} />
  </div>
);

export default App;