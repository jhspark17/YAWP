import React from 'react';
import {Route} from 'react-router-dom';
import Home from './greeting/home';
import SignInContainer from "../components/session/signin_container";
import SignUpContainer from '../components/session/signup_container';
const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/signin" component={SignInContainer} />
    <Route path="/signup" component={SignUpContainer} />
  </div>
);

export default App;