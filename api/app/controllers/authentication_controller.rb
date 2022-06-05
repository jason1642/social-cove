class AuthenticationController < ApplicationController
  before_action :authorize_request, except: [ :login]
  
  
  
  def login


    begin
      # This does not throw an error if user is not found, it just sets @user to nil
      @user = User.find_by_username(params[:username])
      # Manually raise the error here so it can be rescued in the later rescue blocks
      if @user == nil
        raise ActiveRecord::RecordNotFound
      end
      # print json: @user
      if @user.authenticate(params[:password])
        print 'SUCCESS'
        token = encode(user_id: @user.id, username: @user.username)
        return render json: { user: @user, token: token}, status: :ok
        else
          print 'Wrong password'
          print @user
          return render json: { error: 'Wrong password'}, status: :unauthorized
        end

      rescue ActiveRecord::RecordNotFound => e
        print e
        print 'USER NOT FOUND ERROR'
        return render json: {error: 'Username not found'}, status: :not_found
      # rescue JWT::DecodeError
      #   print "DECODE ERROR"
      #   return render json: {erros: 'Decode Error'}, status: :unauthorized
      rescue ::NoMethodError => x
        print x
        return render json: {error: 'This is my no method error exception handler'}
      # else
        
        
      # ensure
        # print 'LOGIN ACTION!!!!!!!#!#3213123123123'
    end
    

  end

  # Runs the authorize_request function from application_controller, which gets the token from the header that -
  # was set upon login. It has rescue blocks so if it can't find the user with the token it won't run this verify function
  def verify
    render json: @current_user.as_json(methods: :profile_picture_url), status: :ok
  end

  def verify_and_verbose_info
    render json: @current_user.as_json(include: {
      posts:{},
      followers: {},
      following: {},
    },methods: :profile_picture_url)
  end


  private

  def login_params
    params.require(:auth).permit(:username, :password)
  end

end
