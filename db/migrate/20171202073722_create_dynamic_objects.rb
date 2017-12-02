class CreateDynamicObjects < ActiveRecord::Migration
  def change
    create_table :dynamic_objects do |t|
      t.string :name
      t.string :icon

      t.timestamps null: false
    end
  end
end
