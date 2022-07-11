class ApplicationController < ActionController::API
  include ActionController::Cookies
  #wrap_parameters false

  rescue_from ActiveRecord::RecordNotFound, with: :not_found_resp
  rescue_from ActiveRecord::RecordInvalid, with: :not_valid_resp

  private

  def current_user
    @current_user ||= User.find_by_id(session[:user_id])
  end

  def not_found_resp(exception)
    render json: { error: "#{exception.model} not found"}, status: :not_found
  end

  def not_valid_resp(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

end
