class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, -> {order('created_at DESC')}, dependent: :destroy

  has_one_attached :image

  def image_url
    Rails.application.routes.url_helpers.url_for(image) if image.attached?
  end

  def comments_sort_by_latest
    
    comments.includes(:user).order('id').reverse
  end
end