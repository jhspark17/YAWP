import React from "react";
import NavBarShowContainer from "../NavBar/navbar_show_container";
import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";
import { Link } from "react-router-dom";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.review.body,
      user_id: this.props.currentUser,
      business_id: this.props.businessId,
      rating: 3,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.business && this.props.formType === "Create Review") {
      this.currentUserReview();
    } else {
      this.props.fetchBusiness(this.props.businessId);
    }
  }

  componentDidUpdate(prevProps) {
    if (
      !prevProps.business &&
      this.props.business &&
      this.props.formType === "Create Review"
    ) {
      this.currentUserReview();
    }
  }

  onSubmit(e) {
    e.preventDefault();
    this.props
      .action(this.state)
      .then(() =>
        this.props.history.push(`/businesses/${this.props.businessId}`)
      );
  }

  deleteReview() {
    let review = this.findReview();
    this.props
      .delete(review)
      .then(() =>
        this.props.history.push(`/businesses/${this.props.businessId}`)
      );
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }

  findReview() {
    for (let i = 0; i < this.props.businessReviews.length; i++) {
      let review = this.props.businessReviews[i];
      if (review.userId === currentUser.id) {
        return review.id;
      }
    }
    return null;
  }

  currentUserReview() {
    let foundReview = false;
    this.props.businessReviews.forEach(review => {
      if (!foundReview && review.userId === currentUser.id) {
        this.props.history.push(
          `/businesses/${this.props.businessId}/reviews/${review.id}`
        );
        foundReview = true;
      }
    });
  }

  showPageLink() {
    return `/businesses/${businessId}`;
  }

  checkType() {
    if (this.props.formType === "Update Review") {
      return (
        <i
          class="fas fa-trash-alt fa-2x"
          style={{ padding: 25 }}
          onClick={() => this.deleteReview()}
        />
      );
    }
    return "";
  }

     
  render() {
    const placeholder = "Your review helps others learn about great local businesses.\n\nPlease don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees.";
    if (this.props.business === undefined) {
      return null;
    }
    return (
      <div>
        
        <NavBarShowContainer type="review-form" />
        <div className="review-container">
        <div className="review-title-container">
          <Link
            to={`/businesses/${this.props.businessId}`}
            className="review-title"
          >
            {this.props.business.businessName}
          </Link>
        </div>
        <form onSubmit={this.onSubmit}>
            <textarea
              cols="80"
              rows="20"
              placeholder={placeholder}
              onChange={this.update("body")}
              value={this.state.body}
            />
            <div className="formSubmit">
              <input
                className="review-submit"
                type="submit"
                value={this.props.formType}
              />
            </div>
        </form>
        {this.checkType()}
        </div>
      </div>
    );
  }
}

export default ReviewForm;
