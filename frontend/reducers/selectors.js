export const selectReviewsForBusiness = (state, businessId) => {
  const allReviews = Object.values(state.entities.reviews);

  return allReviews.filter(review => review.businessId === businessId);
};