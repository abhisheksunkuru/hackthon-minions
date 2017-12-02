class Specification < ActiveRecord::Base
  belongs_to :dynamic_object
  has_many :fields


  def get_fields_list
    fields.map do |field|
      {
        key: field.key,
        input_type: field.input_type,
        required: field.required,
        options: field.options
      }
    end
  end
end
