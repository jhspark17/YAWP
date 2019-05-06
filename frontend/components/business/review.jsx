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
    
    this.props
      .delete(this.props.review.id)
      .then(() =>
        this.props.history.push(`/businesses/${this.props.businessId}`)
      );
  }

  getDate(){
    let date = this.props.review.updatedAt;
    if (date === undefined) {
      return null;
    }
    return `${date.slice(5, 7)}/${date.slice(8, 10)}/${date.slice(0, 4)}`;
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
              <span>{this.getDate()}</span>
            </div>
            <div className="review-body">
              <div className="review-text-body">{this.props.review.body}</div>
              {this.checkUser()}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Review