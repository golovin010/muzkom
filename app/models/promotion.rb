class Promotion < ActiveRecord::Base
  mount_uploader :image, PromotionImageUploader
  has_and_belongs_to_many :products
  
  scope :visible, where(:visibility=>true)
end
