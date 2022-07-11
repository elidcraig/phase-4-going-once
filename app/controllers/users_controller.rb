class UsersController < ApplicationController

  before_action :find_user, only: [:show, :update, :destroy]

  def index
    render json: User.all
  end
  
  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { errors: ["Unauthorized action"] }, status: 401
    end
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = new_user.id
    render json: user, status: :created
  end

  def update
    @user.update!(user_params)
    render json: user, status: :accepted
  end

  def destroy
    @user.destroy
    head :no_content
  end


  private

  def find_user
    @user = User.find(params[:id])
  end

  def user_params
    params.permit(:username, :email, :password, :password_confirmation, :avatar_url, :full_name, :address)
  end

end
