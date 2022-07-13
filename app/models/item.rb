class Item < ApplicationRecord
  belongs_to :user
  has_many :bids, dependent: :destroy
  has_many :bidders, through: :bids, source: :user

  validates :category, presence: true

end