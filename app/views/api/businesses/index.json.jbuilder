@businesses.each do |business|
  json.businesses do
    json.set! business.id do
      json.partial! 'api/businesses/business', business: business
      json.reviews business.reviews
    end 
  end
end

# json.reviews do
#         business.reviews.each do |review|
#           json.set! review.id do
#             json.extract! review, :id, :body, :rating, :user_id, :business_id
#           end
#         end
#       end