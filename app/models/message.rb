class Message < ApplicationRecord
  validates :channel_type, :author_id, :body,  :channel_id, presence: true

  belongs_to :author,
  class_name: :User,
  primary_key: :id,
  foreign_key: :author_id

  belongs_to :channel,
  class_name: :TextChannel,
  primary_key: :id,
  foreign_key: :channel_id

  end
