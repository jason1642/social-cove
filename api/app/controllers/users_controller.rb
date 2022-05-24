class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token


  def index
    @users = User.all
    secondUser = User.where(id:2)
    print json: secondUser
    render json: @users
  end

  def findOneById
    user = User.find_by(id: params[:id])
    render json: user
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

  def delete
    user = User.find_by(id: params[:id])
    User.destroy(params[:id])
    render json: user
  end
end
