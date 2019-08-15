import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import NavBarShowContainer from '../NavBar/navbar_show_container';
import Review from './review';
import SignInContainer from '../session/signin_container'
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import FakeInformation from './fake_information'
import BusinessMap from './business_map'
import MainContentHeader from './main_content_header'

const BusinessShow = props => {
   const {deleteReview, businessId, currentUser, fetchBusiness, demoSignIn, business, match} = props
    useEffect(() => {
      window.scrollTo(0, 0);
      console.log("it works");
      fetchBusiness(match.params.businessId);
    }, []);

    if (!business) {
      return "";
    } 
  
   const costSign = () => {
    let dollarSign = [];
    for (let i = 0; i < business.rating; i++) {
      dollarSign.push("$");
    }
    return dollarSign.join("");
  }

  const phoneNumber = () => {
    if (business.phoneNumber.split("").length < 4) {
      return business.phoneNumber;
    }
    return `(${business.phoneNumber.slice(
      0,
      3
    )}) ${business.phoneNumber.slice(
      3,
      6
    )}-${business.phoneNumber.slice(6, 10)}`;
  }

  const getStars = (num) => {
    let stars = [];

    for (let i = 0; i < num; i++) {
      stars.push(<div key={i} className={`mystar fa fa-star checked`} />);
    }
    return stars;
  }

  const hasReview = () => {
    if (!currentUser) {
      return (
        <Link to={`/signin`}>
          <input id="write-a-review" type="button" value="Write a Review" />
        </Link>
      );
    }

    for (let i = 0; i < business.reviews.length; i++) {
      let userId = business.reviews[i].userId;
      if (userId === currentUser) {
        return (
          <Link
            to={`/businesses/${match.params.businessId}/reviews/${
              business.reviews[i].id
            }`}
          >
            <input id="write-a-review" type="button" value="Update Review" />
          </Link>
        );
      }
    }
    return (
      <Link to={`/businesses/${match.params.businessId}/reviews`}>
        <input id="write-a-review" type="button" value="Write a Review" />
      </Link>
    );
  }

 
  const handleDelete = (id) => {
    deleteReview(id).then(() => fetchBusiness(match.params.businessId));
  }

  const allReviews = business.reviews.map(review => {

    return (<Review
    id = {review.id}
    review={review}
    business = {business}
    key={review.id}
    currentUser= {currentUser}
    deleteReview={handleDelete}
    />)
  })

    const content = (
      <div>
        <NavBarShowContainer type="show" />
        <div className="main">
          <MainContentHeader business={business} match={match} currentUser={currentUser}/>
          <div className="outer">
            <div className="info-pictures-container">
              <div className="info-pictures">
                <div className="mapbox-container">
                  <div className="mapbox">
                    <BusinessMap
                      businesses={[business]}
                      type="show"
                      zoom="false"
                    />
                  </div>
                  <div className="business-basic-info">
                  <div> {business.address1}</div>
                  <div>
                    {`${business.city}, ${
                     business.state
                    } ${business.zipCode}`}
                  </div>
                  <div>{phoneNumber()}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="restaurant-photo">
              <div className="restaurant-photo-inside">
                <img src= {business.photos[0]} />
              </div>
              <div className="restaurant-photo-inside">
                <img src= {business.photos[1]} />
              </div>
              <div className="restaurant-photo-inside">
                <img src= {business.photos[2]} />
              </div>
            </div>
          </div>
        </div>
        <div className="show-body">
          <div className="main-body-content">
            <div className="body-header">
              <h2 className="top-recommended">
                Recommended Reviews <br/>
              </h2>
              <div className="business-name-review">
                {`for ${business.businessName}`}
              </div>
            </div>
            <div className="comments-more-information">
              <ul>
                {allReviews}
              </ul>
              <div />
            </div>
          </div>
          <FakeInformation />
          <div />
        </div>
      </div>
    );
    return content;
  }



export default BusinessShow;