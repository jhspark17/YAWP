json.business do
  json.partial! 'api/businesses/business', business: @business
end
  
@business.reviews.each do |review|
  json.reviews do 
    json.set! review.id do
      json.extract! review, :id, :body, :rating, :user_id, :business_id
    end
  end


  json.users do
    json.set! review.user.id do
      json.partial! 'api/users/user', user: review.user
    end
  end
end