class FieldSerializer < ActiveModel::Serializer
  attributes :id,:key,:input_type,:required, :options
end
