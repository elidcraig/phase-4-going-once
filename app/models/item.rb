class Item < ApplicationRecord
  belongs_to :user
  has_many :bids, dependent: :destroy
  has_many :bidders, through: :bids, source: :user

  validates :category, presence: true

  def highest_current_bid
    if self.bids.empty?
      starting_bid
    else
      self.bids.maximum(:amount)
    end
  end

end