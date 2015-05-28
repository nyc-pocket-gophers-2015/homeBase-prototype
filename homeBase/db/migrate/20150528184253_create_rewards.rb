class CreateRewards < ActiveRecord::Migration
  def change
    create_table :rewards do |t|
    	t.string :name, null: false
    	t.integer :cost, null: false
    	t.string :category, null: false

      t.timestamps null: false
    end
  end
end
