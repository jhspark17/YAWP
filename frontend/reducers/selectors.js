
export const selectReviewsForBusiness = (state, businessId) => {
  const allReviews = Object.values(state.entities.reviews);
  return allReviews.filter(review => review.businessId === businessId);
};

export const findAvgRating = (state, businessId) => {
  
  const allReviews = Object.values(state.entities.reviews);
  let reviews = allReviews.filter(review => review.businessId === businessId);
  let totalRating = 0;
  if (reviews.length === 0) {return 0}
  for(let i = 0; i < reviews.length; i ++) {
    let rating = reviews[i].rating
    totalRating += rating
  }

  
 
  return totalRating / reviews.length
}

export const findAvgRatingShow = (state, businessId) => {
  
  const allReviews = Object.values(state.entities.reviews);
  let totalRating = 0;
  if (allReviews.length === 0) {return 0}
  for(let i = 0; i < allReviews.length; i ++) {
    let rating = allReviews[i].rating
    totalRating += rating
  }


  return totalRating / allReviews.length
}