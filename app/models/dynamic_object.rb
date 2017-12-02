class DynamicObject < ActiveRecord::Base
  has_one :specification

  #accepts_nested_attributes_for :specification
end
