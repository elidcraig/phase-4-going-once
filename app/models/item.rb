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

  def self.most_bids_item
    self.all.max_by(&:most_bids_id)
  end

  def most_bids_id
    self.bids.pluck(:item_id)
  end


end