class Api::V1::DynamicObjectsController < ApplicationController
  before_action :dynamic_object_params,only: :create
  def index
    @objects = DynamicObject.all
    render json: @objects,status: :ok
  end

  def create
    @object  = DynamicObject.create(name: params[:name],icon: params[:icon])
    if params[:specification] && params[:specification][:fields]
      specification = Specification.create(dynamic_object: @object)
      params[:specification][:fields].each do |field|
        field  = Field.new(field.merge({specification_id: specification.id}))
        if field.save
          render json: @object,status: :ok
        else
          render json: field.errors ,status: :unprocessable_entity
        end

      end
    else
      render json: "Specification or fields is required".to_json ,status: :unprocessable_entity
    end
  end
  private
  def dynamic_object_params
    params.require(:specification).permit!
  end
  def response_list(objects)
    arr = []
    objects.each do |object|
      item = {name: object.name,
          icon: object.name,
          specification: {
            fields: object.specification.get_fields_list
          }
      }
    end
  end
end