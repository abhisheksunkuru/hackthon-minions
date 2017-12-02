class Api::V1::DataTypesController < ApplicationController
  def index
    @datatypes = DataType.all
    render json: @datatypes,status: :ok
  end
end