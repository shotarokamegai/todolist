class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
    	t.string :name
    	t.string :description
    	t.integer :quantity
    	t.string :date
    	t.boolean :status
    	t.timestamps
    end
  end
end
