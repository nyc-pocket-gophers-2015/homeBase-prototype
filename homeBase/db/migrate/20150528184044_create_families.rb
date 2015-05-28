class CreateFamilies < ActiveRecord::Migration
  def change
    create_table :families do |t|
    	t.string :surname, null: false

      t.timestamps null: false
    end
  end
end
