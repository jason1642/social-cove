class PrivateChatsController < ApplicationController
  before_action :set_private_chat, only: %i[ show edit update destroy ]

  # GET /private_chats or /private_chats.json
  def index
    @private_chats = PrivateChat.all
  end

  # GET /private_chats/1 or /private_chats/1.json
  def show
  end

  # GET /private_chats/new
  def new
    @private_chat = PrivateChat.new
  end

  # GET /private_chats/1/edit
  def edit
  end

  # POST /private_chats or /private_chats.json
  def create
    @private_chat = PrivateChat.new(private_chat_params)

    @private_chat_recipient = PrivateChat.new()
    @private_chat_recipient.sender_id = params[:recipient_id]
    @private_chat_recipient.recipient_id = params[:sender_id]

    if @private_chat.save && @private_chat_recipient.save
      render json: @private_chat.as_json()
    else
      render json: {message: 'There was an error creating this chatroom'}
    end
    # respond_to do |format|
    #   if @private_chat.save && @private_chat_recipient.save
    #     render json: @private_chat.as_json(include: :user)
    #     format.html { redirect_to private_chat_url(@private_chat), notice: "Private chat was successfully created." }
    #     format.json { render :show, status: :created, location: @private_chat }
    #   else
    #     format.html { render :new, status: :unprocessable_entity }
    #     format.json { render json: @private_chat.errors, status: :unprocessable_entity }
    #   end
    # end
  end

  # PATCH/PUT /private_chats/1 or /private_chats/1.json
  def update
    respond_to do |format|
      if @private_chat.update(private_chat_params)
        format.html { redirect_to private_chat_url(@private_chat), notice: "Private chat was successfully updated." }
        format.json { render :show, status: :ok, location: @private_chat }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @private_chat.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /private_chats/1 or /private_chats/1.json
  def destroy
    @private_chat.destroy

    respond_to do |format|
      format.html { redirect_to private_chats_url, notice: "Private chat was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_private_chat
      @private_chat = PrivateChat.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def private_chat_params
      params.require(:private_chat).permit(:sender_id, :recipient_id, :id)
    end
end
