@users.each do |user|
  json.set! user.id do
      json.extract! user, :id , :user_name
  end
end