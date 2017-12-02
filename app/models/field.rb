class Field < ActiveRecord::Base
  serialize :options
  belongs_to :specification
  validates :input_type,inclusion: { in: %w(text_field select_dropdown file_upload),
    message: "%{value} is not a valid input_type" }
end
