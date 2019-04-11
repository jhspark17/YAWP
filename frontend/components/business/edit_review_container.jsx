import { connect } from "react-redux";
import { updateReview, deleteReview } from "../../actions/review_actions";
import { fetchBusiness } from "../../actions/business_actions"
import { selectReviewsForBusiness } from "../../reducers/selectors";
import ReviewForm from "./review_form";
import React from 'react';

class EditReviewForm extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    this.props.fetchBusiness(this.props.businessId);
  }

  render() {
    if (!this.props.business) return null;
    const props = this.props;
    return (
      <ReviewForm {...props}/>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let businessId = parseInt(ownProps.match.params.businessId);
  let business = state.entities.businesses[businessId];
  return {
    businessId,
    business,
    businesses: state.entities.businesses,
    currentUser: state.entities.users[state.session.currentUser].id,
    review: state.entities.reviews[ownProps.match.params.reviewId],
    businessReviews: selectReviewsForBusiness(state, businessId),
    formType: 'Edit Review'
  }
};

const mapDispatchToProps = dispatch => ({
  action: (review) => dispatch(updateReview(review)),
  delete: (id) => dispatch(deleteReview(id)),
  fetchBusiness: (id) => dispatch(fetchBusiness(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditReviewForm);