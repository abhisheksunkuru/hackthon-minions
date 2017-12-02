class Field < ActiveRecord::Base
  serialize :options
  belongs_to :specification

end
