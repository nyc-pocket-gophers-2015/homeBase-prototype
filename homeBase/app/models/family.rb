class Family < ActiveRecord::Base
	has_many :members
	has_many :events
	has_many :rewards
	has_many :tasks
end
