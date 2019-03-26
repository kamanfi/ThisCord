class User < ApplicationRecord
  validates :email, :discord_id, :session_token, uniqueness: true, presence: true
  validates :user_name, :password_digest, presence: true
  validates :password, length: {minimum: 6}, allow_nil: true
  
  after_initialize :ensure_session_token!, :ensure_img_url! 
  attr_reader :password

  def password=(password)
      @password = password
      self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    bcp = BCrypt::Password.new(self.password_digest)
    bcp.is_password?(password);
  end

  def reset_session_token!
    self.update(session_token: User.generate_session_token)
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  private

  def ensure_img_url!
    self.img_url ||= 'app/assets/images/user_icon/Discord-Logo-White.svg'
  end

  def ensure_session_token!
    self.session_token ||= User.generate_session_token
  end

  def self.find_by_credentials(discord_id, password)
    @user = User.find_by(discord_id: discord_id)
    return nil unless @user && @user.is_password?(password)
    @user
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  
end