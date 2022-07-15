class User < ApplicationRecord
  has_many :bids, dependent: :destroy
  has_many :items, through: :bids

  has_many :posted_items, class_name: "Item", dependent: :destroy

  has_secure_password

  validates :username, :email, presence: true, uniqueness: true

  def won_auctions
    myId = self.id
    self.items.select(&:is_closed?).select {|item| item.is_winning_bidder?(myId)}
  end
end
