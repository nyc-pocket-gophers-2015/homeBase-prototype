class Task < ActiveRecord::Base
	belongs_to :family
	belongs_to :assigned_member_id, class_name: "Member", foreign_key: :member_id 
	belongs_to :completed_member_id, class_name: "Member", foreign_key: :member_id 
end
