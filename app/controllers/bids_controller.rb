class BidsController < ApplicationController
  before_action :find_bid, only: [:show, :update, :destroy]

  def index
    render json: Bid.all
  end

  def create
    bid = Bid.create!(bid_params)
    render json: bid, status: :created
  end

  def show
    render json: @bid
  end

  def update
    @bid.update!(bid_params)
    render json: bid, status: :accepted
  end

  def destroy
    @bid.destroy
    head :no_content
  end


  private

  def find_bid
    @bid = Bid.find(params[:id])
  end

  def bid_params
    params.permit(:item_id, :user_id, :amount)
  end




end
