class UsersController < ApplicationController
  # skip_before_action :verify_authenticity_token
  before_action :set_user, only: [:show]
  before_action :authorize_request, only: [:update, :destroy]
  

  def index
    @users = User.all
    # secondUser = User.where(id:2)
    # print json: secondUser
    render json: @users.as_json(include: {},methods: :profile_picture_url)
  end

  def show 
    user = User.find_by(id: params[:id])
    # print json: @user.followings
    render json: user.as_json(include: {
      posts: {
        include: :user
      }
    },
    methods: :profile_picture_url) 
  end

  def show_verbose
    user = User.find_by(id: params[:id])
    render json: user.as_json(include: {
      posts: {
        include: :user, 
        include: :comments,
        methods: :image_url
      },
      following:{},
      followers:{},

    }, methods: :profile_picture_url)
  
  end

# /users/:id/posts
  def posts
    @user = User.find_by(id: params[:id])
    @posts = Post.where(user_id: @user)
  render json: @posts.as_json(include: {
      user: {},
      comments:{},
      image: {}
    })
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
    # @user.bio = params[:bio]
    @user.email = params[:email]
    @user.profile_picture.attach(params[:profile_picture])
    @user.bio = ''

    if @user.save
      render json: @user.as_json(only: [:id, :username, :email, :bio, :created_at])
    else 
      render json: { message: 'There was an error'}, status: :bad_request
    end 
  
    
    
    # return @user
  end




# Change allow_nil: true to false in models to require password
  def update
    # Should update only if user is logged in
    # Use current user instance so you don't have to find by id and compare current user id
    
    print params[:user]
    
    # @current_user.username = params[:new_username]
    # @current_user.password = 'newpass1'
    doc = ActiveStorage::Blob.create_and_upload!(
      io: File.open(params[:profile_picture][:uri]),
      filename: params[:profile_picture][:filename],
      content_type: params[:profile_picture][:content_type]
    )
    
    if @current_user.update user_params  
      @current_user.profile_picture.attach(doc)
      @current_user.save
      user = User.find_by(id: @current_user.id)
      render json: user.as_json(include: {
        posts: {
          include: :user, include: :comments, methods: :image_url
        },
        following:{},
        followers:{},
  
      }, methods: :profile_picture_url)

    else
      render json: {errors: @current_user, message: 'There was an error updating your account'}, status: :bad_request
    end

    # render json: user

  end

  def update_settings
    print params[:user]
    if @current_user.update[:]
      @current_user.save
      render json: user.as_json(include: {
        posts: {}
      })
    else
      render json: {errors: @current_User, message: 'There was an error updating user settings'}, status: :bad_request
    end


  end

  def update_password

  end







  def destroy
    user = User.find_by(id: params[:id])
    user.destroy(params[:id])

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
