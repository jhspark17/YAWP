import React from 'react';
import {Route, Switch} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignInContainer from "../components/session/signin_container";
import SignUpContainer from '../components/session/signup_container';
import BusinessShowContainer from '../components/business/business_show_container';
import BusinessIndexContainer from '../components/business/business_index_container';
import Home from '../components/greeting/home'
import Footer from "../components/footer/footer";
import {AuthRoute, ProtectedRoute} from "../util/route_util";

const App = () => (
  <div>
    <Switch>
    <Route exact path="/" component={GreetingContainer} />
    <Route path="/businesses" component={BusinessIndexContainer} />
    <AuthRoute path="/signin" component={SignInContainer} />
    <AuthRoute path="/signup" component={SignUpContainer} />
    <Route path="/businesses/:businessId" component={BusinessShowContainer} />
    <Route path ="/" component={Home}/>
    </Switch>
    <Footer />
  </div>
);

export default App;