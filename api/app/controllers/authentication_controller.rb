class AuthenticationController < ApplicationController
  before_action :authorize_request, except: [:register, :login]
  
  
  
  def login


    begin
      
      @user = User.find_by_username(params[:username])
      if @user.authenticate(params[:password])
        token = encode(user_id: @user.id, username: @user.username)
        render json: { user: @user, token: token}, status: :ok
        else
          render json: { errors: 'unauthorized'}, status: :unauthorized
        end

      rescue ActiveRecord::RecordNotFound
        print 'ERROR'
        return render json: {errors: 'unauthorized'}, status: :unauthorized
      rescue JWT::DecodeError
        print "DECODE ERROR"
        return render json: {erros: 'Decode Error'}, status: :unauthorized
      rescue ::NoMethodError => x
        print x
        return render json: {error: 'This is my no method error exception handler'}
      else
        
        
      ensure
        # print 'LOGIN ACTION!!!!!!!#!#3213123123123'
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
