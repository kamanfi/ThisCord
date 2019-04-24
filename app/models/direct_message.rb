class DirectMessage < ApplicationRecord 
    validates :sender_id, :receiver_id, :text_channel_id, presence: true


    belongs_to :sender,
    class_name: :User,
    primary_key: :id,
    foreign_key: :sender_id

    belongs_to :receiver,
    class_name: :User,
    primary_key: :id,
    foreign_key: :receiver_id
end