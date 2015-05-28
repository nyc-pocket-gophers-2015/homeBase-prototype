class Reward < ActiveRecord::Base
	belongs_to :family
	belongs_to :member
end
