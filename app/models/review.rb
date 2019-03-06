class Review < ApplicationRecord
  validates :body, :rating, :business_id, :user_id, presence: true
  validates :rating, inclusion: {in: (1..5)}

  belongs_to :user
  belongs_to :business
end
