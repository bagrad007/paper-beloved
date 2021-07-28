class Orders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t| 
      t.string :frame
      t.string :color_of_flower
      t.string :background_color
      t.string :text_to_display
      t.integer :user_id

      t.timestamps
    end
  end
end
