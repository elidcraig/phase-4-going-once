class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :avatar_url, :full_name, :address
end
