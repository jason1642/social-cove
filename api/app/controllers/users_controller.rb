class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_user, only: [:show, :update]

  def index
    @users = User.all
    secondUser = User.where(id:2)
    print json: secondUser
    render json: @users
  end

  def show
    user = User.find_by(id: params[:id])
    render json: user
  end



  def posts
    @user = User.find_by(id: params[:id])
    @posts = Post.where(user_id: @user)
    render json: @posts.as_json(include: {
      user: {},
      # comments: {}
    }), status: :ok

  end








  def create
    newUser = User.new
    newUser.username = params[:username]
    newUser.password = params[:password]
    newUser.bio = params[:bio]
    newUser.email = params[:email]
    newUser.save
    render json: newUser
    return params
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


end
