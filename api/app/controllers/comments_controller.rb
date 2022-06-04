class CommentsController < ApplicationController
  # skip_before_action :verify_authenticity_token
  before_action :set_comment, only: %i[ show edit update destroy ]
  before_action :set_post, only: %i[index]
  # before_action :set_user, only: %i[create]
  before_action :authorize_request, only: [:create]
  # GET /comments or /comments.json
  def index
    render json: @post.as_json(include: {
      comments: {}
    }), status: :ok
  end

  # GET /comments/1 or /comments/1.json
  def show
    @comment = Comment.find_by(id: params[:id])
    render json: @comment.as_json(include: {
      user: {},
    })
  end

  # GET /comments/new
  def new
    @comment = Comment.new
  end

  # GET /comments/1/edit
  def edit
  end

  # POST /comments or /comments.json
  def create
    @comment = Comment.new(comment_params)
    @comment.user = @current_user
    if @comment.save
      render json: {
        data: @comment,
        status: :created
      } 
    else
      render json: { errors: @comment.errors, status: :unprocessable_entity}
    end
  end

  # PATCH/PUT /comments/1 or /comments/1.json
  def update
    respond_to do |format|
      if @comment.update(comment_params)
        format.html { redirect_to comment_url(@comment), notice: "Comment was successfully updated." }
        format.json { render :show, status: :ok, location: @comment }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /comments/1 or /comments/1.json
  def destroy
    @comment.destroy

    respond_to do |format|
      format.html { redirect_to comments_url, notice: "Comment was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    def set_post
      @post = Post.find(params[:post_id])
    end

    # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:user_id, :post_id, :content)
    end
end
