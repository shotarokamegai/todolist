require 'bcrypt' 
class User < ActiveRecord::Base
	self.has_secure_password
	has_many :items
	has_many :categories
end
