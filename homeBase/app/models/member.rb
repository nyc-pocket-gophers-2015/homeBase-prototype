class Member < ActiveRecord::Base
	has_many :medals
	belongs_to :family
	has_many :events
	has_many :rewards
	has_many :tasks, foreign_key: :assigned_member_id, class_name: "Member"
	has_many :tasks, foreign_key: :completed_member_id, class_name: "Member"
	
end
