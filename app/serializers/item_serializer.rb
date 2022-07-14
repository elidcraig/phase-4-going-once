class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image_url, :starting_bid, :starting_time, :closing_time, :category, :highest_current_bid, :formatted_starting_time, :formatted_closing_time
  has_one :user

    # def item
    #   items[object.id]
    # end

  def formatted_starting_time
    s_time = self.object.starting_time
    s_time.strftime("%A, %m/%d/%y %l:%M %p")
  end
  
  def formatted_closing_time
    c_time = self.object.closing_time
    c_time.strftime("%A, %m/%d/%y %l:%M %p")
  end
end
