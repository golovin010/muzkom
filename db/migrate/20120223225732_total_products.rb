class TotalProducts < ActiveRecord::Migration
  def up
    add_column :products, :total, :decimal, :precision=>10, :scale=>2, :default=>0
  end

  def down
    remove_column :products, :total
  end
end
