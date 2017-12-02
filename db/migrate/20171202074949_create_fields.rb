class CreateFields < ActiveRecord::Migration
  def change
    create_table :fields do |t|
      t.string :key
      t.string :input_type
      t.boolean :required
      t.text :options

      t.timestamps null: false
    end
  end
end
