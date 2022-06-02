class UsersController < ApplicationController
  # skip_before_action :verify_authenticity_token
  before_action :set_user, only: [:show, :update]
  

  def index
    @users = User.all
    secondUser = User.where(id:2)
    print json: secondUser
    render json: @users
  end

  def show
    user = User.find_by(id: params[:id])
    # print json: @user.followings
    render json: UserSerializer.new(user).serializable_hash[:data][:attributes]
  end

  def show_verbose
    user = User.find_by(id: params[:id])
    render json: user.as_json(include: {
      posts: {
        include: :user
      }
    })
  
  end


  def posts
    @user = User.find_by(id: params[:id])
    @posts = Post.where(user_id: @user)
    render json: PostSerializer.new(@post).serializable_hash[:data][:attributes], status: :ok

  end


  def comments
    @user = User.find_by(id: params[:id])
    @comments = Comment.where(user_id: @user)
    render json: @comments.as_json(include: {
      user: {}
    }), status: :ok
  end



 


  def create
    @user = User.new
    @user.username = params[:username]
    @user.password = params[:password]
    @user.bio = params[:bio]
    @user.email = params[:email]
    @user.profile_picture.attach(params[:profile_picture])
    @user.bio = ''

    if @user.save
      render json: @user.as_json(only: [:id, :username, :email, :bio, :created_at])
    else 
      render json: {message: 'There was an error'}, status: :bad_request
    end 
  
    
    
    # return @user
  end






  def update
    # Should update logged in user
    # Use current user instance so you don't have to find by id and compare current user id
    user =  User.find_by(id: params[:id])

    
    user.username = params[:new_username]
    user.update(:username => params[:new_username])


    render json: user

    end








  def destroy
    user = User.find_by(id: params[:id])
    User.destroy(params[:id])
    render json: user
  end










  private


  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :email, :bio, :password, :profile_picture)
  end
end
