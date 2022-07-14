class ItemsController < ApplicationController
  before_action :find_item, only: [:show, :update, :destroy]

  def index
    render json: Item.order(:closing_time)
  end

  def create
    item = Item.create!(item_params)
    render json: item, status: :created
  end

  def show
    render json: @item
  end

  def update
    @item.update!(item_params)
    render json: @item, status: :accepted
  end

  def destroy
    @item.destroy
    head :no_content
  end


  private

  def find_item
    @item = Item.find(params[:id])
  end

  def item_params
    params.permit(:name, :description, :image_url, :starting_bid, :category, :starting_time, :closing_time, :user_id)
  end




end
