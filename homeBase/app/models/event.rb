class Event < ActiveRecord::Base
	belongs_to :member
	belongs_to :family
end
