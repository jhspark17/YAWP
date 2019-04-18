
@businesses.each do |business|
  json.businesses do
    json.set! business.id do
      json.partial! 'api/businesses/business', business: business
    end 
  end
end

@reviews.each do |review|
  json.reviews do 
    json.set! review.id do
      json.extract! review, :id, :body, :rating, :user_id, :business_id
    end
  end
end

#  @businesses.each do |business|
#   business.reviews.each do |review|
#   json.reviews do 
#     json.set! review.id do
#       json.extract! review, :id, :body, :rating, :user_id, :business_id
#     end
#   end
# end
# end