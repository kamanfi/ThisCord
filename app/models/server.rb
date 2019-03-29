class Server < ApplicationRecord 
  validates :server_name, :moderator_id, presence: true

  after_initialize :ensure_img_url!

  belongs_to :moderator,
  class_name: :User,
  primary_key: :id,
  foreign_key: :moderator_id



  private
  def ensure_img_url!
    self.img_url ||= 'splash/Discord-Logo-White.svg'
  end

end
