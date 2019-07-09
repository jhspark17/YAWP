import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import NavBarShowContainer from '../NavBar/navbar_show_container';
import Review from './review';
import SignInContainer from '../session/signin_container'
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import FakeInformation from './fake_information'
import BusinessMap from './business_map'

const BusinessShow = props => {
   let businessId = props.match.params.businessId;
   let fetchBusiness = props.fetchBusiness;
    useEffect(() => {
      console.log("it works");
      fetchBusiness(props.match.params.businessId);
    }, []);

    if (!props.business) {
      return "";
    } else {
      final = Math.floor(props.avgRating * 2);
    }
    debugger
  
  let final;

  // componentDidMount() {
  //   this.props.fetchBusiness(this.props.match.params.businessId);
  //   window.scrollTo(0, 0);
  // }

  // componentDidUpdate(prevProps) {
  //   if ( prevProps.match.params.businessId !== this.props.match.params.businessId) {
  //     this.props.fetchBusiness(this.props.match.params.businessId);
  //   }
  // }

  const costSign = () => {
    let dollarSign = [];
    for (let i = 0; i < props.business.rating; i++) {
      dollarSign.push("$");
    }
    return dollarSign.join("");
  }

  const phoneNumber = () => {
    
    if (props.business.phoneNumber.split("").length < 4) {
      return props.business.phoneNumber;
    }
    return `(${props.business.phoneNumber.slice(
      0,
      3
    )}) ${props.business.phoneNumber.slice(
      3,
      6
    )}-${props.business.phoneNumber.slice(6, 10)}`;
  }

  const getStars = (num) => {
    let stars = [];

    for (let i = 0; i < num; i++) {
      stars.push(<div key={i} className={`mystar fa fa-star checked`} />);
    }
    return stars;
  }

  const hasReview = () => {
    if (!props.currentUser) {
      return (
        <Link to={`/signin`}>
          <input id="write-a-review" type="button" value="Write a Review" />
        </Link>
      );
    }

    for (let i = 0; i < props.reviews.length; i++) {
      let userId = props.reviews[i].userId;
      if (userId === props.currentUser) {
        return (
          <Link
            to={`/businesses/${props.match.params.businessId}/reviews/${
              props.reviews[i].id
            }`}
          >
            <input id="write-a-review" type="button" value="Update Review" />
          </Link>
        );
      }
    }
    return (
      <Link to={`/businesses/${props.match.params.businessId}/reviews`}>
        <input id="write-a-review" type="button" value="Write a Review" />
      </Link>
    );
  }


   

    const content = (
      <div>
        <NavBarShowContainer type="show" />
        <div className="main">
          <div className="main-header">
            <div className="business-header-info-container">
              <div className="business-header-info">
                <div>
                  <div>{props.business.businessName}</div>
                  <img
                    className={`star-lrg-${final}` + ` star-lrg`}
                    src="https://i.imgur.com/UkZkm0D.png"
                  />
                  <div>$$</div>
                </div>

                <div className="under-header-right">
                  <div>{hasReview()}</div>
                  <div className="add-share-save">
                    <input type="button" id="add-photo" value="Add Photo" />
                    <input type="button" id="add-photo" value="Share" />
                    <input type="button" id="add-photo" value="Save" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="outer">
            <div className="info-pictures-container">
              <div className="info-pictures">
                <div className="mapbox-container">
                  <div className="mapbox">
                    <BusinessMap
                      businesses={[props.business]}
                      type="show"
                      zoom="false"
                    />
                    {/* <img
                        alt="Map"
                        height="135"
                        src="https://maps.googleapis.com/maps/api/staticmap?scale=2&amp;center=37.799607%2C-122.407305&amp;language=None&amp;zoom=15&amp;markers=scale%3A2%7Cicon%3Ahttps%3A%2F%2Fyelp-images.s3.amazonaws.com%2Fassets%2Fmap-markers%2Fannotation_64x86.png%7C37.799607%2C-122.407305&amp;client=gme-yelp&amp;sensor=false&amp;size=286x135&amp;signature=DEROAHn4U3svgGuQUypYsswInjk="
                        width="286"
                      /> */}
                  </div>
                  <div>{props.business.address1}</div>
                  <div>
                    {`${props.business.city}, ${
                      props.business.state
                    } ${props.business.zipCode}`}
                  </div>
                  <div>{phoneNumber()}</div>
                </div>
              </div>
            </div>
            <div className="restaurant-photo">
              <div className="restaurant-photo-inside">
                <img src={props.business.photos[0]} />
              </div>
              <div className="restaurant-photo-inside">
                <img src={props.business.photos[1]} />
              </div>
              <div className="restaurant-photo-inside">
                <img src={props.business.photos[2]} />
              </div>
            </div>
          </div>
        </div>
        <div className="show-body">
          <div className="main-body-content">
            <div className="body-header">
              <h2 className="top-recommended">
                Recommended Reviews <br />
              </h2>
              <div className="business-name-review">
                {`for ${props.business.businessName}`}
              </div>
            </div>
            <div className="comments-more-information">
              <ul>
                {props.business.reviews.map(review => (
                  <Review
                    review={review}
                    key={review.id}
                    date={props.date}
                    currentUser={props.currentUser}
                    delete={props.delete}
                  />
                ))}
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