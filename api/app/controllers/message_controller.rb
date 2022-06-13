class MessageController < ApplicationController
  before_action :send_private_message, only: %i[ send_private_message]


  def send_private_message
    @message = Message.new(params[:content])
    @message.private_chat_id = params[:private_chat_id]
    if @message.save
      
    end
  end





  private 

  def set_group_chat
    @group_chat = GroupChat.find(params[:group_chat_id])
  end


  def set_private_chat
    @private_chat = PrivateChat.find(params[:private_chat_id])
  end
end
