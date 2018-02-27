json.id @card.id
json.title @card.title
json.list_title @list.title
json.description @card.description
json.comments do
  json.array! @card.comments do |comment|
    json.id comment.id
    json.user comment.user
    json.text comment.text
    json.date comment.updated_at
  end
end
