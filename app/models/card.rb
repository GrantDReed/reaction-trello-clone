class Card < ApplicationRecord
  validates_presence_of :title, allow_blank: false

  belongs_to :list
  has_many :comments, dependent: :destroy
end
