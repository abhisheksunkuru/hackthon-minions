class DynamicObjectSerializer < ActiveModel::Serializer
  attributes :name,:icon
  has_one :specification
end
