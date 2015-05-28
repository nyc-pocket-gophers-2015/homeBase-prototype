class Task < ActiveRecord::Base
	belongs_to :family
	belongs_to :assigned_member, class_name: "Member", foreign_key: :assigned_member_id 
	belongs_to :completed_member, class_name: "Member", foreign_key: :completed_member_id 
end
