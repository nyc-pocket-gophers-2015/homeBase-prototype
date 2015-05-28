class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
    	t.string :title, null: false
    	t.integer :point_value, null: false
    	t.integer :assigned_member_id
    	t.integer :completed_member_id
    	t.date :deadline

      t.timestamps null: false
    end
  end
end
