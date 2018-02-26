class Comment < ApplicationRecord
  validates_presence_of :user, :text

  belongs_to :card
end
