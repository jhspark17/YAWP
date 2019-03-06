
json.review do
  json.extract! @review, :id, :body, :user_id, :business_id
end

json.user do
  json.partial! 'api/users/user', user: @review.user
end