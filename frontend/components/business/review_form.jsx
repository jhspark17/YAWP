import React from 'react';
import NavBarShowContainer from '../NavBar/navbar_show_container';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import {Link} from 'react-router-dom'

class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: this.props.review.body,
      user_id: this.props.currentUser,
      business_id: this.props.businessId,
      rating: 4,
    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount(){
    if (this.props.business && this.props.formType === 'Create Review') {
      this.currentUserReview();
    } else {
      this.props.fetchBusiness(this.props.businessId)
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.business && this.props.business && this.props.formType === 'Create Review') {
      this.currentUserReview();
    }
  }

  onSubmit(e){
    e.preventDefault();
    this.props.action(this.state)
    .then(() => this.props.history.push(`/businesses/${this.props.businessId}`))
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  currentUserReview(){
    let foundReview = false
    this.props.businessReviews.forEach(review => {
      if (!foundReview && review.userId === currentUser.id) {
        this.props.history.push(`/businesses/${this.props.businessId}/reviews/${review.id}`)
        foundReview = true;
      }
    });
  }

  showPageLink(){
    return `/businesses/${businessId}`
  }

  render() {
    if (this.props.business === undefined) {
      return null;
    }
    console.log(this.props.currentUser)
    return(
      <>
        <NavBarShowContainer />
        <div className="review-form">
          <div className="review-title-container">
          <Link to={`/businesses/${this.props.businessId}`} className="review-title"> {this.props.business.businessName}</Link>
          </div>
          <form onSubmit={this.onSubmit}>
          <div id="review-box">
            <textarea  
              cols="80"
              rows="20" 
              placeholder="Create a Review" 
              onChange={this.update("body")}
              value={this.state.body}
            />
            <div>
            <input className="review-submit" type="submit" value={this.props.formType}/>
            </div>
            </div>
          </form>
        </div>
      </>
    )
  }
}

export default ReviewForm;