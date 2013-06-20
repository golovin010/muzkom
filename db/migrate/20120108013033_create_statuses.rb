# -*- encoding : utf-8 -*-
class CreateStatuses < ActiveRecord::Migration
  def change
    create_table :statuses do |t|
      t.string :name, :default=>"", :null=>false
      t.timestamps
    end
  end
end
