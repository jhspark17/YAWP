# == Schema Information
#
# Table name: businesses
#
#  id            :bigint(8)        not null, primary key
#  address_1     :string           not null
#  address_2     :string
#  city          :string           not null
#  state         :string           not null
#  zip_code      :string           not null
#  latitude      :float            not null
#  rating        :integer          not null
#  business_info :text             not null
#  phone_number  :integer
#  website       :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  longitude     :float            not null
#  category_id   :integer          not null
#  business_name :string           not null
#

class Business < ApplicationRecord
  validates :business_name, :address_1, :city, :state, :zip_code, :latitude, :longitude, :rating, :business_info, presence: true
  validates :business_name, :address_1, uniqueness: true

  has_many_attached :photos
  belongs_to :category
end 




