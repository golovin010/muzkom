# -*- encoding : utf-8 -*-
class User < ActiveRecord::Base
  acts_as_authentic
end
