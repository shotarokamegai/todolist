class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
    	t.string :name
    	t.integer :quantity
    	t.string :date
    	t.boolean :done
        t.integer :category_id
    	t.timestamps
    end
  end
end
