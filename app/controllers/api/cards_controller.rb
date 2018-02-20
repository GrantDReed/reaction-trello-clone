class Api::CardsController < ApplicationController
  before_action :set_card, only: [ :show, :edit, :update, :destroy, :move ]

  def show
  end

  def create
    @card = Card.new(card_params)
    @board = Board.find(List.find(@cards.list_id).board_id)

    if @card.save
      render 'api/boards/show', status: :created
    else
      @error = @card.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end

  rescue ActionController::ParameterMissing
    @error = "Invalid board data provided"
    render 'api/shared/error', status: :unprocessable_entity
  end

  def update
  end

  private

  def set_card
    @card = Card.find(params[:id])
  end

  def card_params
    params.require(:cards).permit(:list_id, :title)
  end
end
