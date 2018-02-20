class CreateLists < ActiveRecord::Migration[5.1]
  def change
    create_table :lists do |t|
      t.string :title, nil: false
      t.integer :board_id

      t.timestamps
    end
  end
end
