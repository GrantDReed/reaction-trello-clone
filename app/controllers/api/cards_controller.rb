class Api::CardsController < ApplicationController
  def show
    @card = Card.find(params[:id])
  end

  def create
    @card = Card.new(card_params)
    @board = Board.find(List.find(@card.list_id).board_id)

    if @card.save
      render 'api/boards/show', status: :created
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
    @list = List.find(@card.list_id)
    @board = Board.find(@list.board_id)

    if @card.update(update_card_params)
      render 'api/boards/show', status: :ok
    else
      @error = @card.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end

  rescue ActionController::ParameterMissing
    @error = "Invalid card data provided"
    render 'api/shared/error', status: :unprocessable_entity
  end

  private

  def card_params
    params.require(:card).permit(:title, :list_id)
  end

  def update_card_params
    params.require(:card).permit(:title)
  end
end
