import React from 'react';


class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  findUser() {
    for (let i = 0; i < this.props.users.length; i++) {
      let user = this.props.users[i];
      let id = user.id;

      if (id === this.props.review.userId) {
        return user;
      }
    }
  }

  checkUser() {
    if (this.props.currentUser === this.props.review.userId) {
      return (
        <i
          class="fas fa-trash-alt fa-2x"
          style={{ padding: 25 }}
          onClick={() => this.deleteReview()}
        />
      );
    }
    return ""
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

  deleteReview() {
    let review = this.findReview();
    this.props
      .delete(review)
      .then(() =>
        this.props.history.push(`/businesses/${this.props.businessId}`)
      );
  }

  render() {
    let current = this.findUser();
    let picture;
    let userRating;
    if (current === undefined) {
      return "";
    } else {
      picture = current.picture;
      userRating = this.props.review.rating * 2;
      debugger;
    }

    return (
      <>
        <div className="comment-box-container">
          <div className="comment-box-profile">
            <img class="review-user-pic" src={picture} />
            <div>{`${current.firstName}`}</div>
          </div>
          <div className="comment-box-body">
            <div className="comment-box-rating-date">
              <img
                className={`star-medium-${userRating}` + " star-medium"}
                src="https://i.imgur.com/UkZkm0D.png"
              />
              <span>4/18/2019</span>
            </div>
            <div>
              {this.props.review.body}
              {this.checkUser()}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Review