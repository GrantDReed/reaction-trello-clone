json.id @board.id
json.title @board.title
json.lists do
  json.array! @board.list do |list|
    json.id list.id
    json.title list.title
    json.cards do
      json.array! list.cards do |card|
        json.id card.id
        json.title card.title
      end
    end
  end
end
