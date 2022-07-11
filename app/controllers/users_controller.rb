class UsersController < ApplicationController

  # before_action :find_user, only: [:show, :update, :destroy]

  def index
    render json: User.all
  end
  
  def show
    if current_user
      render json: current_user
    else
      render json: { errors: ["Unauthorized action"] }, status: 401
    end
  end

  def create
    new_user = User.create!(user_params)
    session[:user_id] = new_user.id
    render json: new_user, status: :created
  end

  def update
    if current_user
      current_user.update!(user_params)
      render json: current_user, status: :accepted
    else
      render json: { errors: ["Unauthorized action"] }, status: 401
    end
  end

  # def destroy
  #   @user.destroy
  #   head :no_content
  # end


  private

  # def find_user
  #   @user = User.find(params[:id])
  # end

  def user_params
    params.permit(:username, :email, :password, :password_confirmation, :avatar_url, :full_name, :address)
  end

end
