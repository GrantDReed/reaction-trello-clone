class Api::ListsController < ApplicationController
  def create
    @list = List.new(list_params)
    @board = Board.find(@list.board_id)

    if @list.save
      render 'api/boards/show', status: :created
    else
      @error = @list.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActionController::ParameterMissing
    @error = "Invalid list data provided"
    render 'api/shared/error', status: :unprocessable_entity
  end

  def update
  end

  private

  def list_params
    params.require(:list).permit(:title)
  end
end
