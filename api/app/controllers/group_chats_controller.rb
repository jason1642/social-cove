class GroupChatsController < ApplicationController
  before_action :set_group_chat, only: %i[ show edit update destroy ]

  # GET /group_chats or /group_chats.json
  def index
    @group_chats = GroupChat.all
  end

  # GET /group_chats/1 or /group_chats/1.json
  def show
  end

  # GET /group_chats/new
  def new
    @group_chat = GroupChat.new
  end

  # GET /group_chats/1/edit
  def edit
  end

  # POST /group_chats or /group_chats.json
  def create
    @group_chat = GroupChat.new(group_chat_params)

    respond_to do |format|
      if @group_chat.save
        format.html { redirect_to group_chat_url(@group_chat), notice: "Group chat was successfully created." }
        format.json { render :show, status: :created, location: @group_chat }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @group_chat.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /group_chats/1 or /group_chats/1.json
  def update
    respond_to do |format|
      if @group_chat.update(group_chat_params)
        format.html { redirect_to group_chat_url(@group_chat), notice: "Group chat was successfully updated." }
        format.json { render :show, status: :ok, location: @group_chat }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @group_chat.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /group_chats/1 or /group_chats/1.json
  def destroy
    @group_chat.destroy

    respond_to do |format|
      format.html { redirect_to group_chats_url, notice: "Group chat was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_group_chat
      @group_chat = GroupChat.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def group_chat_params
      params.fetch(:group_chat, {})
    end
end
