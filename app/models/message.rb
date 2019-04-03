class Message < ApplicationRecord
  validates :channel_type, :author_id, :body, presence: true

  belongs_to :author,
  class_name: :User,
  primary_key: :id,
  foreign_key: :author_id

  end
