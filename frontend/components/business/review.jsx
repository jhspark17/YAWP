import React from 'react';


class Review extends React.Component{
  constructor(props){
    super(props)
    
  }

  findUser(){
   
   for (let i = 0; i < this.props.users.length; i ++) {
     let user = this.props.users[i];
     let id = user.id
    
     
     if (id === this.props.review.userId) {
        return user;
     }
   }
   
  }

  render(){
    let current = this.findUser();
    let picture;
    let userRating;
    if (current === undefined) {
      return "";
    } else {
       picture = current.picture;
       userRating = (this.props.review.rating * 2)
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
            <div>{this.props.review.body}</div>
          </div>
        </div>
      </>
    );
  }
}

export default Review