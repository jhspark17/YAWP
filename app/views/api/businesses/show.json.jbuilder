json.business do
  json.partial! 'api/businesses/business', business: @business
  json.reviews @business.reviews.map do |review|
    json.partial! 'api/users/user', user: review.user
    json.partial! 'api/reviews/review', review: review
  end
end


    # @business.reviews.each do |review|
    #   json.set! review.id do
    #     json.extract! review, :id, :body, :rating, :user_id, :business_id, :updated_at
    #   end
    #   json.set! review.user.id do
    #     json.extract! json.partial! 'api/users/user', user: review.user
    #   end
    # end
