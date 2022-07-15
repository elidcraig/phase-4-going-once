class UserDashboardSerializer < ActiveModel::Serializer
  attributes :id, :username, :avatar_url, :won_auctions
  has_many :bids
  has_many :posted_items
end
