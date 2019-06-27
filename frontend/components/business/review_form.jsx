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
      rating: 0,
      
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
  }

  componentDidMount() {
    if (this.props.business && this.props.formType === "Create Review") {
      this.currentUserReview();
    } else {
      this.props.fetchBusiness(this.props.businessId);
    }
  }

  componentDidUpdate() {

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

  update(field) {
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }

  currentUserReview() {
    let foundReview = false;
    this.props.businessReviews.forEach(review => {
      if (!foundReview && review.userId === this.state.userId) {
        this.props.history.push(
          `/businesses/${this.props.businessId}/reviews/${review.id}`
        );
        foundReview = true;
      }
    });
  }

  getDate() {
    var today = new Date(),
      date =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();
    return date;
  }

  ratingTextContent(index) {
    const options = [
      "Select your rating",
      "Eek! Methinks not.",
      "Meh. I've experienced better.",
      "A-OK",
      "Yay! I'm a fan.",
      "Woohoo! As good as it gets!"
    ];
    const element = document.getElementById("rating-text");
    element.innerHTML = options[index];
  }

  mouseEnter(index) {
    return () => {
      this.starListClass(index);
      this.ratingTextContent(index);
    };
  }

  starListClass(index) {
    const element = document.getElementById("starlist");
    const lastClass = element.classList[element.classList.length - 1];
    element.classList.remove(lastClass);
    element.classList.add("stars-extra-large-" + index);
  }

  mouseLeave() {
    return () => {
      this.starListClass(this.state.rating);
      this.ratingTextContent(this.state.rating);
    };
  }

  showPageLink() {
    return `/businesses/${businessId}`;
  }

  render() {
    const placeholder =
      "Your review helps others learn about great local businesses.\n\nPlease don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees.";
    const options = [
      "Select your rating",
      "Eek! Me thinks not.",
      "Meh. I've experienced better.",
      "A-OK",
      "Yay! I'm a fan.",
      "Woohoo! As good as it gets!"
    ];
    if (this.props.business === undefined) {
      return null;
    } else if (this.props.currentUser === null) {
      this.props.history.push(`/businesses/${this.props.businessId}`)
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
            <div className="review-form-stars">
              <ul
                id="starlist"
                className={`review-form-stars-list stars-extra-large stars-extra-large-${
                  this.state.rating
                }`}
              >
                <li
                  className="review-form-stars-container"
                  onMouseEnter={this.mouseEnter(1)}
                  onMouseLeave={this.mouseLeave()}
                >
                  <input
                    type="radio"
                    name="stars-input"
                    value="1"
                    onChange={this.update("rating")}
                    className="review-form-stars-input"
                  />
                </li>
                <li
                  className="review-form-stars-container"
                  onMouseEnter={this.mouseEnter(2)}
                  onMouseLeave={this.mouseLeave()}
                >
                  <input
                    type="radio"
                    name="stars-input"
                    value="2"
                    onChange={this.update("rating")}
                    className="review-form-stars-input"
                  />
                </li>
                <li
                  className="review-form-stars-container"
                  onMouseEnter={this.mouseEnter(3)}
                  onMouseLeave={this.mouseLeave()}
                >
                  <input
                    type="radio"
                    name="stars-input"
                    value="3"
                    onChange={this.update("rating")}
                    className="review-form-stars-input"
                  />
                </li>
                <li
                  className="review-form-stars-container"
                  onMouseEnter={this.mouseEnter(4)}
                  onMouseLeave={this.mouseLeave()}
                >
                  <input
                    type="radio"
                    name="stars-input"
                    value="4"
                    onChange={this.update("rating")}
                    className="review-form-stars-input"
                  />
                </li>
                <li
                  className="review-form-stars-container"
                  onMouseEnter={this.mouseEnter(5)}
                  onMouseLeave={this.mouseLeave()}
                >
                  <input
                    type="radio"
                    name="stars-input"
                    value="5"
                    onChange={this.update("rating")}
                    className="review-form-stars-input"
                  />
                </li>
              </ul>
              <span className="review-form-stars-description">
                <p id="rating-text">{options[this.state.rating]}</p>
              </span>
            </div>
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
        </div>
      </div>
    );
  }
}

export default ReviewForm;
