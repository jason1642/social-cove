class AuthenticationController < ApplicationController
  before_action :authorize_request, except: [:register, :login]
  
  
  
  def login
    @user = User.find_by_username(params[:username])
    if @user.authenticate(params[:password])
    token = encode(user_id: @user.id, username: @user.username)
    render json: { user: @user, token: token}, status: :ok
    else
      render json: {errors: 'unauthorized'}, status: :unauthorized
    end
  end


  def verify
    render json: @current_user, status: :ok
  end



  private

  def login_params
    params.require(:auth).permit(:username, :password)
  end

end
