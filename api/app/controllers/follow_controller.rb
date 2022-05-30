class FollowController < ApplicationController
  # skip_before_action :verify_authenticity_token
  before_action :set_follow_list, only: %i[ show index edit update destroy ]

  # GET /posts or /posts.json
 def following_list
  @user = User.find(params[:id])
  render json: @user.followings
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

  # PATCH/PUT /posts/1 or /posts/1.json
  # def update
  #   if @post.update(post_params)
  #     render json: @post
  #   else
  #     render json: @post.errors, status: :unprocessable_entity
  #   end
  # end

  # POST /posts or /posts.json
  def create
    @follow = Follow.new(follow_params)

    # respond_to do |format|
      if @follow.save
        # format.html { redirect_to post_url(@post), notice: "Post was successfully created." }
        render json: { data: @follow, status: :created }
      else
        # format.html { render :new, status: :unprocessable_entity }
        render json: {  errors: @follow.errors, status: :unprocessable_entity }
      end
    # end
  end

  # PATCH/PUT /posts/1 or /posts/1.json
  # def update
  #   respond_to do |format|
  #     if @post.update(post_params)
  #       format.html { redirect_to post_url(@post), notice: "Post was successfully updated." }
  #       format.json { render :show, status: :ok, location: @post }
  #     else
  #       format.html { render :edit, status: :unprocessable_entity }
  #       format.json { render json: @post.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end


  def follow_user
    @follow = Follow.new(follow_params)
    if @follow.save
      render json: {data: @follow, status: :created}
    else
      render json: {errors: @follow.errors, status: :unprocessable_entity}
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
    # Use callbacks to share common setup or constraints between actions.
    def set_follow_list
      @follow_list = Follow.find(params[:id])
    end

    def set_user
      @current_user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def follow_params
      params.require(:follow).permit(:followed_id, :follower_id, :id)
    end
end
