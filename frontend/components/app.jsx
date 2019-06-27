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
import CreateReviewContainer from'./business/create_review._container';
import EditReviewContainer from './business/edit_review_container';

const App = () => (
  <div>
    <Switch>
    <Route exact path="/" component={GreetingContainer} />
    <Route exact path="/businesses" component={BusinessIndexContainer} />
    <AuthRoute path="/signin" component={SignInContainer} />
    <AuthRoute path="/signup" component={SignUpContainer} />
    <Route exact path="/businesses/:businessId" component={BusinessShowContainer} />
    <ProtectedRoute path ="/businesses/:businessId/reviews/:reviewId" component={EditReviewContainer} />
    <ProtectedRoute path="/businesses/:businessId/reviews" component={CreateReviewContainer} />
    <Route path ="/" component={GreetingContainer}/>
    </Switch>
    <Footer />
  </div>
);

export default App;