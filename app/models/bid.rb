class Bid < ApplicationRecord
  belongs_to :item
  belongs_to :user

  validate :bid_too_low

  def bid_too_low
    if self.amount <= self.item.highest_current_bid
      errors.add(:amount, "must be higher than current bid")
    end
  end
end
