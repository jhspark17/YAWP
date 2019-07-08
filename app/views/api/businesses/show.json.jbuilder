json.business do
  json.partial! 'api/businesses/business', business: @business
  json.reviews do
    @business.reviews.each do |review|
      json.set! review.id do
        json.extract! review, :id, :body, :rating, :user_id, :business_id
      end
    end
  end
end
