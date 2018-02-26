class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :user, nil: false
      t.string :text, nil: false
      t.integer :card_id

      t.timestamps
    end
  end
end
