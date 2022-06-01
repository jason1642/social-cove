class PostsController < ApplicationController
  before_action :set_post, only: %i[ show edit update destroy ]
  # skip_before_action :verify_authenticity_token

  # GET /posts or /posts.json
  def index
    @posts = Post.all
    render json: @posts
  end

  # GET /posts/1 or /posts/1.json
  def show
    render json: @post.as_json(include: {
      user: {},
      image: {},
      comments: {
        :include => {:user => {}}
      },
    })
  end

  # GET /posts/new
  def new
    @post = Post.new
  end

  # PATCH/PUT /posts/1 or /posts/1.json
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # POST /posts or /posts.json
  def create
    print params[:title]
    @post = Post.new(post_params)
    print @post
    # respond_to do |format|
      if @post.save
        # format.html { redirect_to post_url(@post), notice: "Post was successfully created." }
        render json: { data: @post, status: :created }
      else
        # format.html { render :new, status: :unprocessable_entity }
        render json: {  errors: @post.errors, status: :unprocessable_entity }
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

  # DELETE /posts/1 or /posts/1.json
  def destroy
    @post.destroy

    render json: {
      message: "Post successfully deleted."
    }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:title, :user_id, :content, :image)
    end
end
