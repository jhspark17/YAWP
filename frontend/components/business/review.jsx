import React from 'react';

const Review = props =>(
<>
  <div className="comment-box-container">
    <div className="comment-box-profile">
      <img class="review-user-pic" src="/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc0FCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ab90ae0a3c84b5604da4be11da5916a5f2059408/demo.png"></img>
      
    </div>
      <div className="comment-box-body">
        <div className="comment-box-rating-date">
        </div>
          <div className="comment-box-body">
            {props.review.body}
          </div>
      </div>
  </div>
</>
)
export default Review