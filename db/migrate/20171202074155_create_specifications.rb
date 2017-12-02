class CreateSpecifications < ActiveRecord::Migration
  def change
    create_table :specifications do |t|

      t.timestamps null: false
    end
  end
end
