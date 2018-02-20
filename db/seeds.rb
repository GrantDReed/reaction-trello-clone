# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

board = Board.create(title: 'First Board')
Board.create(title: 'Second Board')
Board.create(title: 'Third Board')

list = List.create(title: 'List 1', board: board)
List.create(title: 'List 2', board: board)
list3 = List.create(title: 'List 3', board: board)

Card.create(title: 'This is the first card', list: list)
Card.create(title: 'This is the second card', list: list)
Card.create(title: 'This is the third card', list: list)
Card.create(title: 'This is the fourth card', list: list3)
