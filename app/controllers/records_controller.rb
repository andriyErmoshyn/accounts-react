class RecordsController < ApplicationController
  def index
    @records = Record.all
  end

  def create
    @record = Record.new(record_params)
    if @record.save
      render json: @record
    else
      render json: @record.errors, status: :unprocessable_entity
    end
  end

  def update
    @record = Record.find(params[:id])
    if @record.update(record_params)
      render json: @record
    else
      render json: @record.errors, status: :unprocessable_entity
    end
  end

  def destroy
    Record.find(params[:id]).destroy
    head :no_content
  end

  private

  def record_params
    params.require(:record).permit(:date, :amount, :title)
  end
end
