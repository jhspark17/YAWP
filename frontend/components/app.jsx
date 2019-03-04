import React from 'react';
import {Route} from 'react-router-dom';
import Home from './greeting/home';
import SignInContainer from "../components/session/signin_container";
import SignUpContainer from '../components/session/signup_container';
import BusinessShowContainer from '../components/business/business_show_container';
import Footer from "../components/footer/footer";
import {AuthRoute, ProtectedRoute} from "../util/route_util";
const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <AuthRoute path="/signin" component={SignInContainer} />
    <AuthRoute path="/signup" component={SignUpContainer} />
    <Route path="/businesses/:businessId" component={BusinessShowContainer} />
    <Footer />
  </div>
);

export default App;