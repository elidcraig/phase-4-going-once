class UserDashboardSerializer < ActiveModel::Serializer
  attributes :id, :username, :avatar_url
  has_many :bids
  has_many :posted_items
end
