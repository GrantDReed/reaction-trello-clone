class Api::ListsController < ApplicationController
  def show
    @list = List.find(params[:id])
    @board = Board.find(@list.board_id)
  end

  def create
    @list = List.new(list_params)
    @board = Board.find(@list.board_id)
    
    if @list.save
      render :create, status: :created
    else
      @error = @list.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActionController::ParameterMissing
    @error = "Invalid list data provided"
    render 'api/shared/error', status: :unprocessable_entity
  end

  def update
    @list = List.find(params[:id])
    @board = Board.find(@list.board_id)

    if @list.update(update_list_params)
      render :update, status: :updated
    else
      @error = @list.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocesseable_entity
    end

  rescue ActionController::ParameterMissing
    @error = "Invalid list data provided"
    render 'api/shared/error', status: :unprocesseable_entity
  end

  private

  def list_params
    params.require(:list).permit(:title, :board_id)
  end

  def update_list_params
    params.require(:list).permit(:title)
  end
end
