class PrivateChatsController < ApplicationController
  before_action :set_private_chat, only: %i[ edit update destroy ]
  before_action :authorize_request, only: %i[ all_current_user_chats]

  # GET /private_chats/1 or /private_chats/1.json
  def show
    @conversation = Message.where(sender_id: params[:sender_id], recipient_id: params[:recipient_id]).or(Message.where(sender_id: params[:recipient_id], recipient_id: params[:sender_id]))
    render json: @conversation.as_json(include: {
    sender: {},
    recipient: {}
    })
  end

  # GET /private_chat/all_current_user_chats/:id
  def all_current_user_chats
    # Get ALL messages where sender is equal to current user id, then organize them?
    @all_users_chats = Message.where(sender_id: params[:id]).or(Message.where(recipient_id: params[:id]))
    @all_users_chats = @all_users_chats.group_by do |message|
      message.recipient.username
    end
    render json: @all_users_chats.as_json(include: {
      recipient: {
        # methods: :profile_picture_url
      }
    })

  end


  def send_private_message
    @message = Message.new(private_chat_params)
    @message.content = params[:content]



    if @message.save
      render json: @message.as_json()
    else
      render json: {message: @message.errors, data: @message.as_json()}
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
    def set_sender_private_chat
      @sender_private_chat = PrivateChat.find(sender_id: params[:sender_id], recipient_id: params[:recipient_id])
    end

    def set_recipient_private_chat
      @recipient_private_chat = PrivateChat.find(sender_id: params[:recipient_id], recipient_id: params[:sender_id])
    end

      # Only allow a list of trusted parameters through.
    def private_chat_params
      params.require(:private_chat).permit(:sender_id, :recipient_id, :content, :id)
    end

    def message_params
      params.require(:message).permit(:content, :sender_id, :recipient_id)
    end
end
