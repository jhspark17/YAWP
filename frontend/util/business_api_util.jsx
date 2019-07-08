export const fetchBusiness = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/businesses/${id}`,
  })
);

export const createBusiness = (business) => (
  $.ajax({
    method: "POST",
    url: `/api/businesses`,
    data: {business}
  })
);

export const fetchBusinesses = () => (
  $.ajax({
    method: "GET",
    url: `/api/businesses`
  })
);

export const searchBusinesses = (search) => {
 return ($.ajax({
    method: "Get",
    url: `/api/search?q=${search}`
  }))
};


// @reviews.each do |review|
//   json.reviews do 
//     json.set! review.id do
//       json.extract! review, :id, :body, :rating, :user_id, :business_id
//     end
//   end
// end

// json.businesses do
//   @businesses.each do |business|
//     json.set! business.id do
//       json.partial! 'api/businesses/business', business: business
//       business.reviews.each do |review|
//         json.reviews do 
//           json.set! review.id do
//           json.extract! review, :id, :body, :rating, :user_id, :business_id
//         end
//       end
//     end
//   end
// end
// @business.reviews.each do |review|
//   json.reviews do 
//     json.set! review.id do
//       json.extract! review, :id, :body, :rating, :user_id, :business_id, :updated_at
//     end
//   end


//   json.users do
//     json.set! review.user.id do
//       json.partial! 'api/users/user', user: review.user
//     end
//   end
// end





