json.extract! user, :id, :email, :first_name, :last_name 
json.picture url_for(user.profile_pic)