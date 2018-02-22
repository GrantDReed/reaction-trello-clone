class Api::ListsController < ApplicationController
  def show
    @list = List.find(params[:id])
    @board = Board.find(@list.board_id)

    redirect_to api_board_path(@board)
  end

  def create
    @list = List.new(list_params)
    @board = Board.find(@list.board_id)

    if @list.save
      redirect_to api_board_path(@board)
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

    if @list.update
      redirect_to api_board_path(@board)
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
    params.require(:list).permit(:title)
  end
end
