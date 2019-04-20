import React from 'react';
import { Link } from 'react-router-dom';
import NavBarShowContainer from '../NavBar/navbar_show_container';
import Review from './review';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import FakeInformation from './fake_information'
import BusinessMap from './business_map'

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);

    let businessId = this.props.match.params.businessId;
  }
  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId);
  }

  costSign() {
    let dollarSign = [];
    for (let i = 0; i < this.props.business.rating; i++) {
      dollarSign.push('$');
    }
    return dollarSign.join('');
  }

  phoneNumber() {
    if (this.props.business.phoneNumber.split('').length < 3) {
      return this.props.business.phoneNumber;
    }
    return `(${this.props.business.phoneNumber.slice(0, 3)}) ${this.props.business.phoneNumber.slice(3, 6)}-${this.props.business.phoneNumber.slice(6, 10)}`
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.businessId !== this.props.match.params.businessId) {
      this.props.fetchBusiness(this.props.match.params.businessId)
    }
  }

  getStars(num) {
    let stars = [];

    for (let i = 0; i < num; i++) {
      stars.push(<div key={i} className={`mystar fa fa-star checked`}></div>);
    }
    return (stars);
  }


  hasReview() {
    if (!this.props.currentUser) {
      return (
        <Link to={`/signin`}><input id="write-a-review" type="button" value="Write a Review" /></Link>
      )
    }

    for (let i = 0; i < this.props.reviews.length; i++) {
      let userId = this.props.reviews[i].userId;
      if (userId === this.props.currentUser) {
        return (
          <Link to={`/businesses/${this.props.match.params.businessId}/reviews/${this.props.reviews[i].id}`}><input id="write-a-review" type="button" value="Update Review" /></Link>
        )
      }
    }
    return (
      <Link to={`/businesses/${this.props.match.params.businessId}/reviews`}>
        <input id="write-a-review" type="button" value="Write a Review" />
      </Link>
    );
  }


  render() {
    let final;
    if (!this.props.business) {
      return "";
    } else{
      final = Math.floor(this.props.business.avgRating * 2);
    }
    return (
      <div>
        <NavBarShowContainer type="show" />
        <div className="main">
          <div className="main-header">
            <div className="business-header-info-container">
              <div className="business-header-info">
                <div>
                  <div>{this.props.business.businessName}</div>
                  <img
                    className={`star-lrg-${final}` + ` star-lrg`}
                    src="https://i.imgur.com/UkZkm0D.png"
                  />
                  <div>$$</div>
                </div>

                <div className="under-header-right">
                  <div>{this.hasReview()}</div>
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
                      businesses={[this.props.business]}
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
                  <div>{this.props.business.address1}</div>
                  <div>
                    {`${this.props.business.city}, ${
                      this.props.business.state
                    } ${this.props.business.zipCode}`}
                  </div>
                  <div>{this.phoneNumber()}</div>
                </div>
              </div>
            </div>
            <div className="restaurant-photo">
              <div className="restaurant-photo-inside">
                <img src={this.props.business.photos[0]} />
              </div>
              <div className="restaurant-photo-inside">
                <img src={this.props.business.photos[1]} />
              </div>
              <div className="restaurant-photo-inside">
                <img src={this.props.business.photos[2]} />
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
                {`for ${this.props.business.businessName}`}
              </div>
            </div>
            <div className="comments-more-information">
              <ul>
                {this.props.reviews.map(review => (
                  <Review
                    users={this.props.users}
                    review={review}
                    key={review.id}
                    currentUser={this.props.currentUser}
                    delete = {this.props.deleteReview}
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
  }
}

export default BusinessShow;