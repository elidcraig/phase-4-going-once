class Item < ApplicationRecord
  belongs_to :user
  has_many :bids, dependent: :destroy
  has_many :bidders, through: :bids, source: :user

  validates :category, presence: true


  def self.most_bids_item
    self.all.max_by(&:most_bids_id)
  end

  def most_bids_id
    self.bids.pluck(:item_id)
  end

  # def formatted_starting_time
  #   self.starting_time.strftime("%A, %m/%d/%y %l:%M %p")
  # end
  
  # def formatted_closing_time
  #   self.closing_time.strftime("%A, %m/%d/%y %l:%M %p")
  # end
  
  def highest_current_bid
    if self.bids.empty?
      starting_bid
    else
      self.bids.maximum(:amount)
    end
  end

  def is_closed?
    self.closing_time <= Time.now
  end

  def is_winning_bidder?(user_id)
    winning_bid = self.bids.order('amount DESC').first
    winning_bid.user_id == user_id
  end

end