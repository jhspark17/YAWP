@businesses.each do |business|
  json.set! business.id do
    json.partial! 'api/businesses/show', business: business
  end
end