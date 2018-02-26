class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @card = Card.find(@comment.card_id)
    @list = List.find(@card.list_id)
    @board = Board.find(@list.board_id)

    if @comment.save
      render 'api/cards/show', status: :created
    else
      @error = @comment.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:user, :text, :card_id)
  end
end
