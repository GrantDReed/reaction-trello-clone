class Api::CardsController < ApplicationController
  def show
    @card = Card.find(params[:id])
    @board = Board.find(List.find(@card.list_id).board_id)

    redirect_to api_board_path
  end

  def create
    @card = Card.new(card_params)
    @board = Board.find(List.find(@card.list_id).board_id)

    if @card.save
      redirect_to api_board_path(@board)
    else
      @error = @card.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end

  rescue ActionController::ParameterMissing
    @error = "Invalid card data provided"
    render 'api/shared/error', status: :unprocessable_entity
  end

  def update
    @card = Card.find(params[:id])
    @board = Board.find(List.find(@card.list_id).board_id)

    if @list.update
      redirect_to api_board_path(@board)
    else
      @error = @list.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocesseable_entity
    end

  rescue ActionController::ParameterMissing
    @error = "Invalid card data provided"
    render 'api/shared/error', status: :unprocesseable_entity
  end

  private

  def card_params
    params.require(:cards).permit(:title)
  end
end
