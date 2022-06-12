class FollowController < ApplicationController
  # skip_before_action :verify_authenticity_token
  # before_action :set_follow_list, only: %i[ show index edit update destroy ]
  before_action :set_user, only: %i[follow_user]
  # GET /posts or /posts.json
 def following_list
  @user = User.find(params[:id])
  render json: @user.following
 end

 def followers_list
  @user = User.find(params[:id])
  render json: @user.followers
 end
  # GET /posts/1 or /posts/1.json
  def show
    render json: @current_user.followers
   
  end

  # GET /posts/new
  def new
    @follow = Follow.new
  end




 # Follows user if not already following, unfollows if association already exists and delete association
  def follow_user
    
    @follow = Follow.new(params[:follow].permit(:followed_id, :follower_id))
    if @current_user.following.select {|user| user.id === params[:followed_id]}.length > 0
      print 'Duplicate'
      follow_association = @current_user.following.find(params[:followed_id])
      @current_user.following.delete(follow_association)
      @current_user.save
      return render json: @current_user.as_json(include: { following: {}})
    elsif @follow.save
      return render json: {data: @follow, status: :created}

    else 
       return render json: {errors: @follow.errors, status: :unprocessable_entity}
    end
   
  end

  # DELETE /posts/1 or /posts/1.json
  def destroy
    @follow.destroy

    render json: {
      message: "Follow association destroyed"
    }
  end

  private
    def set_user
      @current_user = User.find(params[:follower_id])
    end

    # Only allow a list of trusted parameters through.
    def follow_params
      params.require(:follow).permit(:followed_id, :follower_id, :id)
    end
end
